'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@chakra-ui/react';

import { generateFormField } from '@/components/forms/utils/generateFormField'

const SignIn = () => {
  const forms = [
    {
      fieldType: 'text',
      title: 'First Name'
    },
    {
      fieldType: 'text',
      title: 'Last Name'
    },
    {
      fieldType: 'email',
      title: 'Email'
    }
  ]

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Container my={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          forms.map((form, i) => (
            generateFormField({ fieldType: form.fieldType, register, title: form.title, index: i })
          ))
        }
        <input type='submit' />
      </form>
    </Container>
  )
}

export default SignIn