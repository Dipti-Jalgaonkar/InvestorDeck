import React, { useRef, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import authContext from '../../context/auth'
import './AppointmentRoom.css'
function AppointmentRoom() {
  const navigate = useNavigate()
  const [id, setId] = useState()
  const { setTrans } = useContext(authContext)
  const handleSubmit = async () => {
    const body = new URLSearchParams()
    body.append('privacy', 'public')
    const response = await fetch('https://api.digitalsamba.com/api/v1/rooms', {
      method: 'POST',
      body: body,
      headers: {
        Authorization:
          'Bearer OGE5MzEwMmMtZGNlZi00MDNhLTg0ZmYtMjFiZWJmMzdhZjFjOkYyaDNOb3NlczR2SU9kQWZUS2pQaTRuRDY0R1BWYVJmNzdLY1R6MG5HaWVLSjJ3UWpFb3h0eFFvOG9idE5oc0U=',
      },
    })
    const data = await response.json()
    console.log(data.id)
    setId(data.room_url)
  }

  const handleClick = async (e) => {
    try {
      const response = await fetch(
        'https://api.digitalsamba.com/api/v1/recordings',
        {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer OGE5MzEwMmMtZGNlZi00MDNhLTg0ZmYtMjFiZWJmMzdhZjFjOkYyaDNOb3NlczR2SU9kQWZUS2pQaTRuRDY0R1BWYVJmNzdLY1R6MG5HaWVLSjJ3UWpFb3h0eFFvOG9idE5oc0U=',
          },
        }
      )
      const data = await response.json()
      console.log(data.data[0].id)
      const response2 = await fetch(
        `http://127.0.0.1:5000/get_audio_link_and_transcript/${data.data[0].id}`,
        {
          method: 'GET',
        }
      )
      const data2 = await response2.json()
      if (data2) {
        setTrans(data2.transcript)
        navigate('/transcript')
      }
      console.log(data2)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <button onClick={handleSubmit}>Create Room</button>
      <iframe
        allow='camera; microphone; display-capture; autoplay;'
        width='100%'
        height='879px'
        src={id}
        allowfullscreen='true'
      ></iframe>
      <button onClick={handleClick}>GET TRANSCRIPT</button>
    </>
  )
}

export default AppointmentRoom
