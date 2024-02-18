const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv').config()
const Investors = require('../models/investor.model')
const Startups = require('../models/startup.model')

const addInvestment = asyncHandler(async (req, res) => {
  const { id, name, amount, startup_id } = req.body
  try {
    const investor = await Investors.findOne({ _id: id })
    if (!investor) {
      res
        .status(404)
        .json({ success: 'false', message: 'Investor does not exist!' })
    } else {
      investor.investments.push({
        startup_id: startup_id,
        startup_name: name,
        investedAmount: amount,
      })

      await investor.save()

      res
        .status(200)
        .json({ success: true, message: 'Investment added successfully!' })
    }
  } catch (err) {
    throw new Error(err.message)
  }
})

const getInvestments = asyncHandler(async (req, res) => {
  const { id } = req.body
  try {
    const investorFound = await Investors.findOne({ _id: id })
    if (!investorFound) {
      res.status(404).json({ success: false, message: 'Investor not found!' })
    } else {
      res
        .status(200)
        .json({ success: true, investments: investorFound.investments })
    }
  } catch (err) {
    throw new Error(err.message)
  }
})

const addAppointment = asyncHandler(async (req, res) => {
  const { id, startup_id, date, time, startup_name, amount } = req.body
  try {
    const investorFound = await Investors.findOne({ _id: id })
    if (!investorFound) {
      res.status(404).json({ success: false, message: 'Investor not found!' })
    } else {
      investorFound.appointments.push({
        appointment_schedule: {
          appointment_date: date,
          appointment_time: time,
        },
        startup_id: startup_id,
        startup_name: startup_name,
        amount: amount,
      })
      await investorFound.save()
      res
        .status(201)
        .json({ success: true, message: 'Appointment Scheduled Successfully' })
    }
  } catch (err) {
    throw new Error(err.message)
  }
})

const getAppointments = asyncHandler(async (req, res) => {
  const { id } = req.body
  try {
    const investorFound = await Investors.findOne({ _id: id })
    if (!investorFound) {
      res.status(404).json({ success: false, message: 'Investor not found!' })
    } else {
      res
        .status(200)
        .json({ success: true, appointments: investorFound.appointments })
    }
  } catch (err) {
    throw new Error(err)
  }
})

module.exports = {
  addInvestment,
  getInvestments,
  addAppointment,
  getAppointments,
}
