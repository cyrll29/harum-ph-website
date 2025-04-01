import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { PublicComponent } from '@/components/auth/PublicComponent'

const FormLayout = ({ children }) => {
  return (
    <PublicComponent>
      <Container variant='authForm'>
        <Flex direction={'column'} rowGap={4}>
          {children}
        </Flex>
      </Container>
    </PublicComponent>
  )
}

export default FormLayout