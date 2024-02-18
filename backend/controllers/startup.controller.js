const dotenv = require('dotenv').config()
const startups = require('../repository/startup.repository')

const self = (module.exports = {
  getStartups: async (req, res) => {
    try {
      const data = await startups.getStartups(req.body)
      console.log(data)
      res.status(200).json({
        success: true,
        startups: data,
        message: 'Retrieved startups successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Error retrieving startups!',
      })
    }
  },
  filterStartups: async (req, res) => {
    try {
      const data = await startups.filterStartups(req.body)
      console.log(data)
      res.status(200).json({
        success: true,
        startups: data,
        message: 'Filtered startups successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: 'Error filtering startups!',
      })
    }
  },
})
