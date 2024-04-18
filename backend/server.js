const express = require('express')
const Razorpay = require('razorpay')

const crypto = require('crypto')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.config')
const authRoutes = require('./routes/auth.routes')
const startupRoutes = require('./routes/startup.routes')
const investmentRoutes = require('./routes/investment.routes')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const secret_key = process.env.RAZORPAY_SECRET_KEY

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {})

app.use(cors())

app.use(express.urlencoded({ extended: false }))

connectDB()

app.use(authRoutes)

app.use(startupRoutes)

app.use(investmentRoutes)

app.post('/order', async (req, res) => {
  const razorpay = new Razorpay({
    key_id: 'rzp_test_Ww9bzsAd6yERbO',
    key_secret: 'Ttxl3IrAug6nq81ylXxLbyIR',
  })

  console.log(req.body)

  const options = {
    amount: req.body.amount,
    currency: req.body.currency,
    receipt: 'any unique id for every order',
    payment_capture: 1,
  }

  try {
    const response = await razorpay.orders.create(options)
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    })
  } catch (err) {
    res.status(400).send('Not able to create order. Please try again!')
  }
})

app.post('/paymentCapture', (req, res) => {
  const data = crypto.createHmac('sha256', secret_key)
  data.update(JSON.stringify(req.body))
  const digest = data.digest('hex')
  if (digest === req.headers['x-razorpay-signature']) {
    console.log('request is legit')
    res.json({
      status: 'ok',
    })
  } else {
    res.status(400).send('Invalid signature')
  }
})

server.listen(PORT, () => {
  console.log('Server is listening on port')
})
