import React from 'react'
import { useState, useContext } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Schedule.css'
import { Button, Stack, ButtonGroup } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import authContext from '../../context/auth'

const Schedule = () => {
  const [value, onChange] = useState(new Date())

  const [time, setTime] = useState()

  const { id } = useParams()
  const navigate = useNavigate()

  const handleSubmit = () => {
    const date = value.toLocaleDateString('en-GB')
    addAppointment(
      appointment.startup_id,
      date,
      time,
      appointment.startup_name,
      appointment.amount
    )
    setTimeout(() => {
      navigate('/myappointments')
    }, 2000)
  }

  const { addAppointment, appointment } = useContext(authContext)

  const handleClick = (e) => {
    setTime(e.target.name)
    console.log(appointment)
  }

  return (
    <>
      <div className='schedule-container'>
        <Calendar
          onChange={onChange}
          value={value}
          minDate={new Date()}
          className='react-calendar'
        />

        <Stack
          direction='column'
          spacing={4}
          align='center'
        >
          <Button
            colorScheme='blue'
            variant='outline'
            size='lg'
            lineHeight='1.2'
            height='48px'
            width='200px'
            border='2px'
            borderColor='blue.500'
            padding='1.8rem'
            name='11:00 AM IST'
            onClick={handleClick}
          >
            11:00 AM IST
          </Button>
          <Button
            colorScheme='blue'
            variant='outline'
            size='lg'
            lineHeight='1.2'
            height='48px'
            width='200px'
            border='2px'
            borderColor='blue.500'
            padding='1.8rem'
            name='1:00 PM IST'
            onClick={handleClick}
          >
            1:00 PM IST
          </Button>
          <Button
            colorScheme='blue'
            variant='outline'
            size='lg'
            lineHeight='1.2'
            height='48px'
            width='200px'
            border='2px'
            borderColor='blue.500'
            padding='1.8rem'
            name='3:00 PM IST'
            onClick={handleClick}
          >
            3:00 PM IST
          </Button>
          <Button
            colorScheme='blue'
            variant='outline'
            size='lg'
            lineHeight='1.2'
            height='48px'
            width='200px'
            border='2px'
            borderColor='blue.500'
            padding='1.8rem'
            name='5:00 PM IST'
            onClick={handleClick}
          >
            5:00 PM IST
          </Button>
          <Button
            colorScheme='blue'
            variant='outline'
            size='lg'
            lineHeight='1.2'
            height='48px'
            width='200px'
            border='2px'
            borderColor='blue.500'
            padding='1.8rem'
            name='7:00 PM IST'
            onClick={handleClick}
          >
            7:00 PM IST
          </Button>
          <Button
            colorScheme='blue'
            // variant='outline'
            size='lg'
            lineHeight='1.2'
            height='48px'
            width='200px'
            border='2px'
            borderColor='blue.500'
            padding='1.8rem'
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </Stack>
      </div>
    </>
  )
}
export default Schedule
