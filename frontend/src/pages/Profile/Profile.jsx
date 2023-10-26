import React from 'react'
import './Profile.css'
import { useContext, useEffect } from 'react'
import authContext from '../../context/auth'
import { Grid, GridItem } from '@chakra-ui/react'
import CardStartup from '../../components/CardStartup/CardStartup'

export const Profile = () => {
  const { getInvestments, investments } = useContext(authContext)

  useEffect(() => {
    getInvestments()
  }, [])

  return (
    <div className='view_container'>
      <h2 className='view_h1'>My Profile : </h2>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap={4}
      >
        {investments.map((item, index) => {
          return (
            <GridItem
              colSpan={2}
              key={index}
            >
              <CardStartup
                name={item.startup_name}
                desc={item.email}
                amount={item.investedAmount}
                type={false}
              />
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )
}

export default Profile
