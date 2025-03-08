'use client';

// UI Related
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Button } from '@chakra-ui/react';

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
    <Container my={20} p={10} border='2px solid lightgray' borderRadius={14}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        {
          SignInForms.map((form, i) => (
            generateFormField({ fieldType: form.fieldType, register, title: form.title, name: form.fieldName, index: i })
          ))
        }
        <Button type='submit' variant='primary'>Sign In</Button>
      </form>
    </Container>
  )
}

export default SignIn