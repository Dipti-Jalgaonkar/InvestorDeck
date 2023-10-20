import React from 'react'
import './ViewStartup.css'
import { Grid, GridItem } from '@chakra-ui/react'
function ViewStartup() {
  return (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(6, 1fr)'
      gap={4}
    >
      <GridItem
        colSpan={2}
        bg='papayawhip'
      />
      <GridItem
        colSpan={2}
        bg='papayawhip'
      />
      <GridItem
        colSpan={2}
        bg='papayawhip'
      />
    </Grid>
  )
}

export default ViewStartup
