const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(MONGO_URI)
    console.log('Successfully connected @: ' + conn.connection.host)
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
