import React, { useEffect, useContext, useState } from 'react'
import authContext from '../../context/auth'
import './ViewStartup.css'
import { Grid, GridItem, Select, Flex, Button } from '@chakra-ui/react'
import CardStartup from '../../components/CardStartup/CardStartup'

function ViewStartup() {
  const { getStartups, startups, filterStartups } = useContext(authContext)

  const [type, setType] = useState('All')

  useEffect(() => {
    getStartups()
  }, [])

  const handleChange = (e) => {
    console.log(e)
    setType(e.target.value)
  }

  const handleFilter = async () => {
    if (type === 'All') {
      getStartups()
    } else {
      filterStartups(type)
    }
  }

  return (
    <div className='view_container'>
      <h2 className='view_h1'>Startup looking for investments : </h2>

      <Flex
        style={{
          margin: '1rem',
        }}
      >
        <Select
          onChange={handleChange}
          w='40rem'
        >
          <option
            onChange={handleChange}
            value='All'
          >
            All
          </option>
          <option
            onChange={handleChange}
            value='Fintech'
          >
            Fintech
          </option>
          <option
            onChange={handleChange}
            value='EdTech'
          >
            EdTech
          </option>
          <option
            onChange={handleChange}
            value='IT'
          >
            IT
          </option>
          <option
            onChange={handleChange}
            value='Entertainment'
          >
            Entertainment
          </option>
        </Select>
        <Button
          colorScheme='green'
          size='md'
          style={{
            marginLeft: '1rem',
          }}
          onClick={handleFilter}
        >
          Submit
        </Button>
      </Flex>

      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap={4}
        style={{
          margin: '1rem',
        }}
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
