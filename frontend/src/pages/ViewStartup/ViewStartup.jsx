import React from 'react'
import './ViewStartup.css'
import { Grid, GridItem } from '@chakra-ui/react'
import CardStartup from '../../components/CardStartup/CardStartup'
function ViewStartup() {
  return (
    <div className="view_container">
      <h2 className='view_h1'>Startup looking for investments : </h2>
      <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(6, 1fr)'
  gap={4}
>
  <GridItem colSpan={2} bg='papayawhip' >
    <CardStartup/>
  </GridItem>
  <GridItem colSpan={2} bg='papayawhip'></GridItem>
  <GridItem colSpan={2} bg='papayawhip'></GridItem>
</Grid>
    </div>
  )
}

export default ViewStartup
