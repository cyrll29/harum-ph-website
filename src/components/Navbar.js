'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

import { Button, Box, Flex, useColorMode } from '@chakra-ui/react'

const Navbar = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction='row' justifyContent='space-between' padding={4} position='sticky' top='0'>
      <Box display={'flex'} flexDirection={'row'} columnGap={2}>
        <Button bg={{ base: 'text.secondary', md: 'text.default', lg: 'text.white' }} onClick={() => router.push('/')} color="text.secondary">Home</Button>
        <Button variant="outline">Outline</Button>
        <Button onClick={toggleColorMode}>{ colorMode === 'light' ? 'Light' : 'Dark'}</Button>
      </Box>
      <Box display='flex' flexDirection='row' columnGap={2} >
        <Button onClick={() => router.push('/auth/sign-in')} variant='outline'>Sign in</Button>
        <Button onClick={() => router.push('/auth/sign-up')} variant='primary'>Sign up</Button>
      </Box>
    </Flex>
  )
}

export default Navbar