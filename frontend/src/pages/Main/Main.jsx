import React from 'react'
import Slider1 from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
import Work from '../../components/Work/Work'
import Client from '../../components/Client/Client'

function Main() {
  return (
    <>
    <Slider1/>
    <div className='main-div'>
    <p>Angel investors focus on helping startups take their first steps rather than getting a favorable return on a loan.</p>
    </div>
    <Card/>
    <Work/>
    <Client/>
    </>
  )
}

export default Main