const express = require('express')
const {
  loginController,
  regController,
} = require('../controllers/auth.controller')

const authRoutes = express.Router()

authRoutes.post('/api/login', loginController)

authRoutes.post('/api/register', regController)

module.exports = authRoutes
