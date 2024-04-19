import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import RenderRazorpay from './RenderRazorpay'

function PaymentGateway() {
  const location = useLocation()
  const [displayRazorpay, setDisplayRazorpay] = useState(false)
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
  })

  useEffect(() => {
    console.log(location.state.amount2)
  }, [])

  const handleCreateOrder = async (amount, currency) => {
    const sendBody = new URLSearchParams()
    sendBody.append('amount', amount * 100)
    sendBody.append('currency', currency)
    sendBody.append('keyId', 'rzp_test_Ww9bzsAd6yERbO')
    sendBody.append('KeySecret', 'Ttxl3IrAug6nq81ylXxLbyIR')

    const data2 = await fetch('http://localhost:5000/order', {
      method: 'POST',
      body: sendBody,
    })

    const data = await data2.json()

    if (data && data.order_id) {
      setOrderDetails({
        orderId: data.order_id,
        currency: data.currency,
        amount: data.amount,
      })
      setDisplayRazorpay(true)
    }
  }
  return (
    <div>
      <button onClick={() => handleCreateOrder(location.state.amount2, 'INR')}>
        Place Order
      </button>

      {displayRazorpay && (
        <>
          <RenderRazorpay
            amount={orderDetails.amount}
            currency={orderDetails.currency}
            orderId={orderDetails.orderId}
            keyId='rzp_test_Ww9bzsAd6yERbO'
            keySecret='Ttxl3IrAug6nq81ylXxLbyIR'
          />
        </>
      )}
    </div>
  )
}

export default PaymentGateway
