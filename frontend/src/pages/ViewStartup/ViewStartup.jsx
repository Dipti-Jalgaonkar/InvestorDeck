import React from 'react'
import './ViewStartup.css'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
function ViewStartup() {
  return (
    <div className='view_container'>
      <h2 className='view_h1'>Startup looking for investments : </h2>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap={4}
      >
        <GridItem colSpan={2}></GridItem>
      </Grid>
    </div>
  )
}

export default ViewStartup
