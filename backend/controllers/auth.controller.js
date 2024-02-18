const dotenv = require('dotenv').config()
const auth = require('../repository/auth.repository')

const self = (module.exports = {
  regInvestor: async (req, res) => {
    try {
      const data = await auth.regInvestor(req.body)
      console.log(data)
      res.status(201).json({
        success: true,
        data,
        message: 'Registered user successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Unable to register investor!',
      })
    }
  },

  loginInvestor: async (req, res) => {
    try {
      console.log(req.body)
      const data = await auth.loginInvestor(req.body)
      console.log(data)
      res.status(200).json({
        success: true,
        data,
        message: 'Investor logged in successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Unable to login investor!',
      })
    }
  },

  regStartup: async (req, res) => {
    try {
      const data = await auth.regStartup(req.body)
      console.log(data)
      res.status(200).json({
        success: true,
        data,
        message: 'Startup registered in successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Unable to register startup!',
      })
    }
  },

  loginStartup: async (req, res) => {
    try {
      const data = await auth.loginStartup(req.body)
      console.log(data)
      res.status(200).json({
        success: true,
        data,
        message: 'Logged in startup successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Unable to login startup!',
      })
    }
  },
})
