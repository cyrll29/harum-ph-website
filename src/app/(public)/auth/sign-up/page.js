'use client';

// UI Related
import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Button } from '@chakra-ui/react'

// Functions
import { generateFormField } from '@/components/forms/utils/generateFormField'

// Utils
 import { SignUpForms } from '../utils/formFIelds'

const SignUp = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Container my={20} p={10} border='2px solid' borderColor='secondary' borderRadius={14}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        {
          SignUpForms.map((form, i) => (
            generateFormField({ fieldType: form.fieldType, register, title: form.title, name: form.fieldName, index: i })
          ))
        }
        <Button type='submit' variant='primary'>Sign Up</Button>
      </form>
    </Container>
  )
}

export default SignUp