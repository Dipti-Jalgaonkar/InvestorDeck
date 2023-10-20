const express = require('express')
const {
    getStartup,
} = require('../controllers/startup.controller')
const startupRoutes = express.Router()

startupRoutes.get('/api/startup/getStartup', getStartup)
module.exports = startupRoutes