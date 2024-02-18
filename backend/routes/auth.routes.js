const express = require('express')
const auth = require('../controllers/auth.controller')

const authRoutes = express.Router()

authRoutes.post('/api/investor/register', auth.regInvestor)

authRoutes.post('/api/investor/login', auth.loginInvestor)

authRoutes.post('/api/startup/register', auth.regStartup)

authRoutes.post('/api/startup/login', auth.loginStartup)

module.exports = authRoutes
