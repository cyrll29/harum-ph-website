'use client';

// UI Related
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Text } from '@chakra-ui/react'

// Functions
import { generateFormField } from '@/components/forms/utils/generateFormField'

// Utils
 import { SignUpForms } from '../utils/formFIelds'

/**
 * A page for signing up.
 *
 * Displays a form with fields for First Name, Last Name, Phone Number, Username, Email, and Password.
 * When the form is submitted, logs the form data to the console.
 *
 * @returns The SignUp page.
 */
const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Text fontSize='2xl' fontWeight='bold'>Sign Up</Text>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        {
          SignUpForms.map((form, i) => (
            generateFormField({ fieldType: form.fieldType, register, title: form.title, name: form.fieldName, index: i })
          ))
        }
        <Button type='submit' variant='primary'>Sign Up</Button>
      </form>
    </>
  )
}

export default SignUp