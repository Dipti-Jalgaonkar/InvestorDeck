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
  Checkbox,
  CheckboxGroup,
  Input,
} from '@chakra-ui/react'

import './Register.css'

function RegisterInv() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    org_name: '',
    org_size: 0,
    valuation: 0,
  })

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
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
                >
                  <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type='email'
                      isRequired
                      value={form.email}
                    />
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Organization Name</FormLabel>
                    <Input
                      type='text'
                      value={form.org_name}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type='Password'
                      value={form.password}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Organization Size</FormLabel>
                    <Input
                      type='Number'
                      value={form.org_size}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Founder Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </GridItem>
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
                >
                  <FormControl isRequired>
                    <FormLabel>Business ID</FormLabel>
                    <Input
                      type='email'
                      isRequired
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Linked In Profile</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Approximate Valuation</FormLabel>
                    <Input type='Number' />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Seeking Funds Amount?</FormLabel>
                    <Input type='Number' />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Founder Name</FormLabel>
                    <Input type='text' />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <Checkbox iconSize='3rem'>GST Registered?</Checkbox>
                </GridItem>
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
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default RegisterStart
