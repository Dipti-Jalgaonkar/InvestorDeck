const dotenv = require('dotenv').config()
const Investors = require('../models/investor.model')
const Startups = require('../models/startup.model')

const self = (module.exports = {
  addInvestment: (body) => {
    return new Promise(async (resolve, reject) => {
      const { id, name, amount, startup_id } = body
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

          resolve('Added Investment')
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  getInvestments: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { id } = body
        const investorFound = await Investors.findOne({ _id: id })
        if (!investorFound) {
          reject('Investor Not Found!')
        } else {
          resolve(investorFound.investments)
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  addAppointment: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { id, startup_id, date, time, startup_name, amount } = body
        const investorFound = await Investors.findOne({ _id: id })
        if (!investorFound) {
          reject('Investor Not Found!')
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
          resolve('Appointment scheduled successfully!')
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  getAppointments: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { id } = body
        const investorFound = await Investors.findOne({ _id: id })
        if (!investorFound) {
          reject('Investor Not Found!')
        } else {
          resolve(investorFound.appointments)
        }
      } catch (err) {
        reject(err)
      }
    })
  },
})
