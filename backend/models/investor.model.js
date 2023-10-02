const mongoose = require('mongoose')

const investorModel = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  org_name: {
    type: String,
  },
})

const investor = mongoose.model('Investors', investorModel)

module.exports = investor
