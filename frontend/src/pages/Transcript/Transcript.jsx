import React from 'react'
import { useState, useContext } from 'react'
import authContext from '../../context/auth.js'

function Transcript() {
  const { trans } = useContext(authContext)
  return <div>{trans}</div>
}

export default Transcript
