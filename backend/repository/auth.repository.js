const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Investors = require('../models/investor.model')
const Startups = require('../models/startup.model')

const self = (module.exports = {
  regInvestor: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, email, password } = body

        if (!email || !password || !name) {
          reject('Please enter all details')
        }

        const userExists = await Investors.findOne({ email })

        if (userExists) {
          reject('User already exists!')
        } else {
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(password, salt)
          const user = await Investors.create({
            name,
            email,
            password: hashedPassword,
          })
          const user_data = {
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: self.generateToken(user._id),
          }
          resolve(user_data)
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  loginInvestor: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { email, password } = body
        const userExists = await Investors.findOne({ email })
        console.log(userExists)
        if (
          userExists &&
          (await bcrypt.compare(password, userExists.password))
        ) {
          const login_data = {
            id: userExists._id,
            name: userExists.name,
            email: userExists.email,
            password: userExists.password,
            startups: userExists.investments,
            token: self.generateToken(userExists._id),
          }
          resolve(login_data)
        } else {
          reject('Invalid credentials!')
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  regStartup: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, email, password, org_size, valuation, type } = body
        if (!name || !email || !password || !org_size || !valuation || !type) {
          reject('Please enter all details!')
        } else {
          const emailExists = await Startups.findOne({ email })
          if (emailExists) {
            reject('Email already exists!')
          } else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const startup = await Startups.create({
              org_name: name,
              email,
              password: hashedPassword,
              org_size,
              valuation,
              type,
            })
            const reg_data = {
              id: startup._id,
              name: startup.org_name,
              email: startup.email,
              password: startup.password,
              org_size: startup.org_size,
              valuation: startup.valuation,
              type: startup.type,
              token: self.generateToken(startup._id),
            }
            resolve(reg_data)
          }
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  loginStartup: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { email, password } = body
        if (!email || !password) {
          reject('Please enter all details!')
        } else {
          const emailExists = await Startups.findOne({ email })
          if (
            emailExists &&
            (await bcrypt.compare(password, emailExists.password))
          ) {
            const login_data = {
              id: emailExists._id,
              name: emailExists.org_name,
              email: emailExists.email,
              password: emailExists.password,
              token: self.generateToken(emailExists._id),
            }
            resolve(login_data)
          } else {
            reject('Invalid Credentials!')
          }
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  generateToken: (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  },
})
