import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'
import './Appointment.css'
import { useContext, useEffect } from 'react'
import authContext from '../../context/auth'

function Appointment() {
  const { getAppointments, schedules } = useContext(authContext)
  useEffect(() => {
    getAppointments()
  }, [])
  return (
    <div className='appoint-cont'>
      <h2> My Appointments :</h2>
      <SimpleGrid
        spacing={30}
        templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
      >
        {schedules.map((item) => {
          return (
            <Card>
              <CardHeader>
                <Heading size='lg'> {item.startup_name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{item.appointment_schedule.appointment_date}</Text>
                <Text>{item.appointment_schedule.appointment_time}</Text>
                <Text>{item.amount}</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          )
        })}
      </SimpleGrid>
    </div>
  )
}

export default Appointment
