import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Schedule.css'
import { Button, Stack, ButtonGroup } from '@chakra-ui/react'

const Schedule = () => {
  const [value, onChange] = useState()

  const handleSubmit = () => {
    console.log(value)
  }

  return (
    <>
      <div className='schedule-container'>
        <Calendar
          onChange={onChange}
          value={value}
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
