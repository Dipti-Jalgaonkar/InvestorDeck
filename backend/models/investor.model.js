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
  investments: [
    {
      startup_id: {
        type: mongoose.ObjectId,
        required: true,
      },
      startup_name: {
        type: String,
        required: [true, 'Please enter a name for your organization'],
      },
      investedAmount: {
        type: String,
        required: [true, 'Please enter invested amount'],
      },
    },
  ],
})

const investor = mongoose.model('Investors', investorModel)

module.exports = investor
