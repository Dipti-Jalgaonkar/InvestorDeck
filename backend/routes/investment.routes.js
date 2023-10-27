const express = require('express')
const {
  addInvestment,
  getInvestments,
  addAppointment,
} = require('../controllers/investment.controller')

const investmentRoutes = express.Router()

investmentRoutes.post('/api/addInvestment', addInvestment)

investmentRoutes.post('/api/getInvestments', getInvestments)

investmentRoutes.post('/api/addAppointment', addAppointment)

module.exports = investmentRoutes
