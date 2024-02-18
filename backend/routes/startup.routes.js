const express = require('express')
const {
  getStartup,
  filterStartups,
} = require('../controllers/startup.controller')
const startupRoutes = express.Router()

startupRoutes.get('/api/startup/getStartup', getStartup)

startupRoutes.post('/api/startup/filterStartups', filterStartups)

module.exports = startupRoutes
