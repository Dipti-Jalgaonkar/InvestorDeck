const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv').config()
const Investors = require('../models/investor.model')
const Startups = require('../models/startup.model')
const { response } = require('express')

const getStartup = asyncHandler(async (req, res) => {
  try {
    const startups = await Startups.find({})
    res.status(200).json({ success: true, startups: startups })
  } catch (err) {
    throw new Error(err.message)
  }
})

const filterStartups = asyncHandler(async (req, res) => {
  try {
    const startups = await Startups.find({ type: req.body.type })
    res.status(200).json({ success: true, startups: startups })
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    })
  }
})

module.exports = { getStartup, filterStartups }
