const express = require('express')
const investments = require('../controllers/investment.controller')

const investmentRoutes = express.Router()

investmentRoutes.post('/api/addInvestment', investments.addInvestment)

investmentRoutes.post('/api/getInvestments', investments.getInvestments)

investmentRoutes.post('/api/addAppointment', investments.addAppointment)

investmentRoutes.post('/api/getAppointments', investments.getAppointments)

module.exports = investmentRoutes
