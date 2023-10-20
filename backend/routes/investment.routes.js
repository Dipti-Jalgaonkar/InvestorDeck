const express = require('express')
const { addInvestment } = require('../controllers/investment.controller')

const investmentRoutes = express.Router()

investmentRoutes.post('/api/addInvestment', addInvestment)

module.exports = investmentRoutes
