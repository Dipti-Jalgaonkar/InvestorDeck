import React, { useRef, useState, useEffect } from 'react'

function AppointmentRoom() {
  const refVideo = useRef()
  const refCanvas = useRef()

  const [streams, setStreams] = useState([])
  useEffect(() => {
    getVideo()
  }, [refVideo])

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 500 } })
      .then((stream) => {
        let video = refVideo.current
        video.srcObject = stream
        video.play()
      })
      .catch((err) => {
        console.error('error:', err)
      })
  }

  return (
    <div>
      <video ref={refVideo}></video>
    </div>
  )
}

export default AppointmentRoom
