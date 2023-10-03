const mongoose = require('mongoose')

const startupSchema = mongoose.Schema({
  org_name: {
    type: String,
    required: [true, 'Please enter a name for your organization'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email to register your organization'],
  },
  password: {
    type: String,
    required: true,
  },
  org_size: {
    type: Number,
    required: [true, 'Please enter your organization size'],
  },
  valuation: {
    type: Number,
    required: [true, 'Please enter a rough valuation for your organization'],
  },
  currentInvestors: [
    {
      investor_name: {
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

const startupModel = mongoose.model('Startups', startupSchema)

module.exports = startupModel
