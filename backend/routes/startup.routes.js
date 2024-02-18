const express = require('express')
const startups = require('../controllers/startup.controller')
const startupRoutes = express.Router()

startupRoutes.get('/api/startup/getStartup', startups.getStartups)

startupRoutes.post('/api/startup/filterStartups', startups.filterStartups)

module.exports = startupRoutes
