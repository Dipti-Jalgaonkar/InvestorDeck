const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const Investors = require('../models/investor.model')
const Startups = require('../models/startup.model')

const regController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!email || !password || !name) {
    res.status(400)
    throw new Error('Please Enter all fields')
  }

  const userExists = await Investors.findOne({ email })

  if (userExists) {
    res.status(401).json({ message: 'User already exists' })
  } else {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await Investors.create({
      name,
      email,
      password: hashedPassword,
    })
    res.status(201).json({
      success: true,
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    })
  }
})

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const userExists = await Investors.findOne({ email })

  if (userExists && (await bcrypt.compare(password, userExists.password))) {
    res.status(201).json({
      success: true,
      id: userExists._id,
      name: userExists.name,
      email: userExists.email,
      password: userExists.password,
      token: generateToken(userExists._id),
    })
  } else {
    res.status(404).json({
      success: false,
      message: 'Invalid Credentials',
    })
  }
})

const startupLoginController = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400)
      throw new Error('Please enter all details!')
    } else {
      const emailExists = await Startups.findOne({ email })
      if (
        emailExists &&
        (await bcrypt.compare(password, emailExists.password))
      ) {
        res.status(200).json({
          success: true,
          id: emailExists._id,
          name: emailExists.name,
          email: emailExists.email,
          password: emailExists.password,
          token: generateToken(emailExists._id),
        })
      } else {
        res.status(404).json({
          success: false,
          message: 'Invalid Credentials',
        })
      }
    }
  } catch (err) {
    throw new Error(err.message)
  }
})

const startupRegController = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, org_size, valuation } = req.body
    if (!name || !email || !password || !org_size || !valuation) {
      res.status(400).json({
        message: 'Please include all fields!',
      })
    } else {
      const emailExists = await Startups.findOne({ email })
      if (emailExists) {
        res.status(400).json({
          success: false,
          message: 'Email already exists',
        })
      } else {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const startup = await Startups.create({
          org_name: name,
          email,
          password: hashedPassword,
          org_size,
          valuation,
        })
        res.status(201).json({
          success: true,
          id: startup._id,
          name: startup.name,
          email: startup.email,
          password: startup.password,
          org_size: startup.org_size,
          valuation: startup.valuation,
          token: generateToken(startup._id),
        })
      }
    }
  } catch (err) {
    throw new Error(err.message)
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  loginController,
  regController,
  startupRegController,
  startupLoginController,
}
