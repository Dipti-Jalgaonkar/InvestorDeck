const dotenv = require('dotenv').config()
const Investors = require('../models/investor.model')
const Startups = require('../models/startup.model')

const self = (module.exports = {
  getStartups: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const startups = await Startups.find({})
        resolve(startups)
      } catch (err) {
        reject('Unable to Find Startups!')
      }
    })
  },
  filterStartups: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const startups = await Startups.find({ type: body.type })
        resolve(startups)
      } catch (err) {
        reject('Unable to filter startups!')
      }
    })
  },
})
