import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'

import './Register.css'

function RegisterInv() {
  return (
    <div className='startup_wrap'>
      <div className='startup_register'>
        <h3 className='reg_startup_title'>Lets Get you strapped in!</h3>
        <Tabs
          align='center'
          isFitted
        >
          <TabList>
            <Tab>Enter Personal Details</Tab>
            <Tab>Enter Organization Details</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid
                marginTop={6}
                h='20rem'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={6}
              >
                <GridItem
                  rowSpan={1}
                  colSpan={2}
                  bg='tomato'
                />
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
                  bg='tomato'
                />
                <GridItem
                  colSpan={2}
                  bg='tomato'
                />
                <GridItem
                  colSpan={2}
                  bg='papayawhip'
                />
              </Grid>
              <div className='startup_buttons_page_1'>
                <Button
                  colorScheme='blue'
                  size='lg'
                  variant='outline'
                >
                  Back
                </Button>
                <Button
                  colorScheme='blue'
                  size='lg'
                >
                  Next
                </Button>
              </div>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default RegisterInv
