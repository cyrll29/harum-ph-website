'use client';

// UI Related
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Text } from '@chakra-ui/react';

// Functions
import { generateFormField } from '@/components/forms/utils/generateFormField'

// Utils
import { SignInForms } from '../utils/formFIelds';
const SignIn = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
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
        <Button type='submit' variant='primary'>Sign In</Button>
      </form>
    </>
  )
}

export default SignIn