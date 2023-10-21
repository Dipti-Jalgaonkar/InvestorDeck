import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.css'
import { Button, Stack, ButtonGroup } from '@chakra-ui/react'

const Schedule = () => {
    const [value, onChange] = useState(new Date());

    return (
      <>
      <div className='schedule-container'>
        <Calendar onChange={onChange} value={value} className="react-calendar"/>
      </div>
      <Stack direction='column' spacing={4} align='center'>
        <Button 
        colorScheme='teal'
        variant='outline' 
        size='lg'
        lineHeight='1.2' 
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'>
          11:00 AM
        </Button>
        <Button colorScheme='teal' variant='outline' size='lg'>
          1:00 PM
        </Button>
        <Button colorScheme='blue' variant='outline' size='lg'>
          3:00 PM
        </Button>
        <Button colorScheme='teal' variant='outline' size='md'>
          5:00 PM
        </Button>
        <Button colorScheme='teal' variant='outline' size='md'>
          7:00 PM
        </Button>
        <Button colorScheme='teal' variant='solid'size='md'>
        Confirm
        </Button>
      </Stack>
      </>
    );
}
export default Schedule;
