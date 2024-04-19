import React from 'react'

import { useNavigate } from 'react-router-dom'

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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { useContext } from 'react'
import authContext from '../../context/auth'

function CardStartup({ startup_id, name, desc, amount, type }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  const { addInvestment, setAppointment } = useContext(authContext)

  const handleInvest = () => {
    addInvestment(startup_id, name, amount)
    onClose()
    navigate('/payment', { state: { amount2: amount } })
  }

  const handleSchedule = () => {
    const id = window.localStorage.getItem('user_id')
    console.log(startup_id)
    setAppointment({
      startup_id: startup_id,
      startup_name: name,
      amount: amount,
    })
    navigate(`/schedule/${id}`)
  }

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{name}</Heading>

            <Text py='2'>{desc}</Text>
            <Text py='2'>{amount}</Text>
          </CardBody>

          <CardFooter>
            {type && (
              <Button
                variant='solid'
                colorScheme='blue'
                onClick={onOpen}
              >
                Invest
              </Button>
            )}
            {!type && (
              <Button
                variant='solid'
                colorScheme='blue'
                onClick={handleSchedule}
              >
                Schedule
              </Button>
            )}
          </CardFooter>
        </Stack>
      </Card>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {type && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure you want to invest in this firm?</ModalBody>
            <ModalFooter>
              <Button
                colorScheme='blue'
                mr={3}
                onClick={handleInvest}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default CardStartup
