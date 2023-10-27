const express = require('express')
const {
  addInvestment,
  getInvestments,
  addAppointment,
  getAppointments,
} = require('../controllers/investment.controller')

const investmentRoutes = express.Router()

investmentRoutes.post('/api/addInvestment', addInvestment)

investmentRoutes.post('/api/getInvestments', getInvestments)

investmentRoutes.post('/api/addAppointment', addAppointment)

investmentRoutes.post('/api/getAppointments', getAppointments)

module.exports = investmentRoutes
