import React, { useEffect, useContext } from 'react'
import authContext from '../../context/auth'
import './ViewStartup.css'
import { Grid, GridItem } from '@chakra-ui/react'
import CardStartup from '../../components/CardStartup/CardStartup'

function ViewStartup() {
  const { getStartups, startups } = useContext(authContext)

  useEffect(() => {
    getStartups()
    console.log(startups)
  }, [])

  return (
    <div className='view_container'>
      <h2 className='view_h1'>Startup looking for investments : </h2>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap={4}
      >
        {startups.map((item) => {
          return (
            <GridItem colSpan={2}>
              <CardStartup
                name={item.org_name}
                desc={item.email}
                amount={item.valuation}
                startup_id={item._id}
                type={true}
              />
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )
}

export default ViewStartup
