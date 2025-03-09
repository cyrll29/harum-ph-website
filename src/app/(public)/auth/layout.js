import React from 'react'
import { Container, Flex } from '@chakra-ui/react'

const FormLayout = ({ children }) => {
  return (
    <Container variant='authForm'>
      <Flex direction={'column'} rowGap={4}>
        {children}
      </Flex>
    </Container>
  )
}

export default FormLayout