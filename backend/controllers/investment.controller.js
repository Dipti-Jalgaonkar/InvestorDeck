const dotenv = require('dotenv').config()
const investments = require('../repository/investment.repository')

module.exports = {
  addInvestment: async (req, res) => {
    try {
      const data = await investments.addInvestment(req.body)
      console.log(data)
      res.status(201).json({
        success: true,
        data: data,
        message: 'Successfully added investment!',
      })
    } catch (err) {
      res
        .status(400)
        .json({ success: false, err, message: 'Error adding investment!' })
    }
  },
  getInvestments: async (req, res) => {
    try {
      const data = await investments.getInvestments(req.body)
      console.log(data)
      res.status(200).json({
        success: true,
        investments: data,
        message: 'Successfully retrieved investments!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Error retrieving investments!',
      })
    }
  },
  addAppointment: async (req, res) => {
    try {
      const data = await investments.addAppointment(req.body)
      console.log(data)
      res.status(201).json({
        success: true,
        data,
        message: 'Appointment scheduled successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Error scheduling appointment!',
      })
    }
  },
  getAppointments: async (req, res) => {
    try {
      const data = await investments.getAppointments(req.body)
      console.log(data)
      res.status(200).json({
        success: true,
        appointments: data,
        message: 'Retrieved appointments successfully',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Error retrieving appointments!',
      })
    }
  },
}
