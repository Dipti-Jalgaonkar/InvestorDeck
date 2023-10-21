const express = require('express')
const {
  addInvestment,
  getInvestments,
} = require('../controllers/investment.controller')

const investmentRoutes = express.Router()

investmentRoutes.post('/api/addInvestment', addInvestment)

investmentRoutes.post('/api/getInvestments', getInvestments)

module.exports = investmentRoutes
