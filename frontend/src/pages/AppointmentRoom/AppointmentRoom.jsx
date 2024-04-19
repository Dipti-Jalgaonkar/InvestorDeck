import React, { useRef, useState, useEffect } from 'react'
import './AppointmentRoom.css'
function AppointmentRoom() {
  const [id,setId] = useState()
  const handleSubmit = async() => {
    const body = new URLSearchParams()
    body.append('privacy','public')
    const response = await fetch(
      'https://api.digitalsamba.com/api/v1/rooms',
      {
        method: 'POST',
        body: body,
        headers: {
          Authorization:
            'Bearer OGE5MzEwMmMtZGNlZi00MDNhLTg0ZmYtMjFiZWJmMzdhZjFjOkYyaDNOb3NlczR2SU9kQWZUS2pQaTRuRDY0R1BWYVJmNzdLY1R6MG5HaWVLSjJ3UWpFb3h0eFFvOG9idE5oc0U=',
        },
      }
    )
    const data = await response.json()
    console.log(data.id)
    setId(data.room_url)
  
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
  </>
)
}

export default AppointmentRoom
