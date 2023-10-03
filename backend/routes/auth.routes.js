const express = require('express')
const {
  loginController,
  regController,
  startupRegController,
  startupLoginController,
} = require('../controllers/auth.controller')

const authRoutes = express.Router()

authRoutes.post('/api/investor/login', loginController)

authRoutes.post('/api/investor/register', regController)

authRoutes.post('/api/startup/register', startupRegController)

authRoutes.post('/api/startup/login', startupLoginController)

module.exports = authRoutes
