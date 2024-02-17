import React from 'react'
import UncontrolledExample from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
import Work from '../../components/Work/Work'
import Client from '../../components/Client/Client'
import './Main.css'
import { Chatbot } from '../../components/Chatbot/Chatbot'

function Main() {
  return (
    <>
    <UncontrolledExample/>
    <div className='placed'>
      <Chatbot/>
      <Card/>
      <Work/>
      <Client/>
    </div>
    </>
  )
}

export default Main