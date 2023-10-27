import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button,Heading, Text } from '@chakra-ui/react'
import './Appointment.css'

function Appointment() {
  return (
    <div className='appoint-cont'>
    <h2> My Appointments :</h2>
    <SimpleGrid spacing={30} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='lg'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='lg'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='lg'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
</div>
  )
}

export default Appointment