import React from 'react'
import { useRouter } from 'next/navigation';

import { Button, Box, Flex } from '@chakra-ui/react'

const Navbar = () => {
  const router = useRouter();

  return (
    <Flex direction='row' justifyContent='space-between' background="tomato" padding={4}>
      <Box display={'flex'} flexDirection={'row'} columnGap={10}>
        <Button background="blue" disabled onClick={() => router.push('/')}>Home</Button>
        <Button variant="outline">Outline</Button>
        <Button>Contact Us</Button>
      </Box>
      <Box display='flex' flexDirection='row' columnGap='20px' >
        <Button onClick={() => router.push('/auth/sign-in')}>Sign in</Button>
        <Button onClick={() => router.push('/auth/sign-up')}>Sign up</Button>
      </Box>
    </Flex>
  )
}

export default Navbar