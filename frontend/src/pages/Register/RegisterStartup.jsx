import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import authContext from '../../context/auth'
import {
  FormControl,
  Select,
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
  Stack,
} from '@chakra-ui/react'

import './Register.css'

function RegisterStart() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    org_name: '',
    org_size: 0,
    valuation: 0,
    type:'',
  })

  const { registerUser, success } = useContext(authContext)

  const navigate = useNavigate()

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async () => {
    await registerUser(
      form.org_name,
      form.email,
      form.password,
      form.org_size,
      form.valuation,
      form.type,
    )
    if (success) {
      navigate('/')
    } else {
      navigate('/')
    }
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
                      id='email'
                      value={form.email}
                      onChange={onChange}
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
                      onChange={onChange}
                      id='org_name'
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type='Password'
                      value={form.password}
                      onChange={onChange}
                      id='password'
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <FormLabel>Organization Size</FormLabel>
                    <Input
                      type='Number'
                      value={form.org_size}
                      onChange={onChange}
                      id='org_size'
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
                    <Input
                      type='Number'
                      value={form.valuation}
                      onChange={onChange}
                      id='valuation'
                    />
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
                  {/* <Checkbox iconSize='3rem'>GST Registered?</Checkbox> */}
                  <FormControl isRequired>
                  <FormLabel>Type of company</FormLabel>
                  <Stack spacing={3}>
                  <Select variant='outline' 
                    placeholder='Type of company'   
                    value={form.type}
                    onChange={onChange}
                    id='type'>
                  <option value='FinTech'>FinTech</option>
                  <option value='Edtech'>EdTech</option>
                  <option value='IT'>IT</option>
                  <option value='Entertainment'>Entertainment</option>
                  </Select>
                  </Stack>
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
                {/* <button onClick={handleSubmit}>Submit</button> */}
                <Button
                  colorScheme='blue'
                  size='lg'
                  variant='outline'
                  onClick={handleSubmit}
                >
                  Submit
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
