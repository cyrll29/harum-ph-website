'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/hooks/useAuth';

import { Button, Box, Flex, useColorMode, useToast } from '@chakra-ui/react'

import { auth } from '@/services/firebase/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const router = useRouter();
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const { user } = useAuth();

  const handleLogOut = async () => {
    await signOut(auth);
    toast({
      title: "You have been logged out",
      description: 'You have been logged out',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Flex direction='row' justifyContent='space-between' padding={4} position='sticky' top='0' zIndex={100} bg="primary">
      <Box display={'flex'} flexDirection={'row'} columnGap={2}>
        <Button bg={{ base: 'text.secondary', md: 'text.default', lg: 'text.white' }} onClick={() => router.push('/')} color="text.secondary">Home</Button>
        <Button variant="outline">Outline</Button>
        <Button onClick={toggleColorMode}>{ colorMode === 'light' ? 'Light' : 'Dark'}</Button>
      </Box>
      {
        user ? (
          <Button onClick={handleLogOut}>Sign out</Button>
        ) : (
          <Box display='flex' flexDirection='row' columnGap={2} >
            <Button onClick={() => router.push('/auth/sign-in')} variant='outline'>Sign in</Button>
            <Button onClick={() => router.push('/auth/sign-up')} variant='primary'>Sign up</Button>
          </Box>
        )
      }

    </Flex>
  )
}

export default Navbar