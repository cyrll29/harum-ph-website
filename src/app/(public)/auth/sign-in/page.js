'use client';

// UI Related
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Text, Stack } from '@chakra-ui/react';

// Firebase
import { auth, provider } from '@/services/firebase/firebase';
import { signInWithPopup, signOut } from "firebase/auth";

// Functions
import { generateFormField } from '@/components/forms/utils/generateFormField'

// Utils
import { SignInForms } from '../utils/formFIelds';

const SignIn = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
        .then((res) => {
          console.log(res)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Text fontSize='2xl' fontWeight='bold'>Sign In</Text>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        {
          SignInForms.map((form, i) => (
            generateFormField({ fieldType: form.fieldType, register, title: form.title, name: form.fieldName, index: i })
          ))
        }
        <Stack direction='column' spacing={4}>
          <Button type='submit' variant='outline'>Sign In</Button>
          <Button variant='primary' onClick={handleGoogleLogin}>Continue with Google</Button>
        </Stack>
      </form>
    </>
  )
}

export default SignIn