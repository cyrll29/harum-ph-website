'use client';

// UI Related
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Text, Stack } from '@chakra-ui/react'

// Firebase
import { auth, provider } from '@/services/firebase/firebase';
import { signInWithPopup, signOut } from "firebase/auth";

// Functions
import { generateFormField } from '@/components/forms/utils/generateFormField'

// Utils
 import { SignUpForms } from '../utils/formFIelds'

const SignUp = () => {
  const [otpForm, setOtpForm] = useState(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    if (otpForm === false) {
      console.log(" I AM RUN ")
      await sendOtp(data)
      setOtpForm(true)
      return;
    }

    verifyOtp(data)
  }

  const sendOtp = async (formData) => {
    const response = await fetch('/api/generateOtp', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  const verifyOtp = async (formData) => {
    const response = await fetch('/api/verifyOtp', {
      method: 'POST',
      body: JSON.stringify({ formData }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <Text fontSize='2xl' fontWeight='bold'>Sign Up</Text>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        {
          !otpForm ?
          SignUpForms.map((form, i) => (
            generateFormField({ fieldType: form.fieldType, register, title: form.title, name: form.fieldName, index: i })
          ))
          : (
            generateFormField({ fieldType: 'number', register, title: 'Verify OTP', name: 'otp', index: 0 })
          )
        }
        {
          !otpForm ? (
            <Stack direction='column' spacing={4}>
              <Button type='submit' variant='outline'>Continue</Button>
              <Button type='button' variant='primary'>Continue with Google</Button>
            </Stack>

          )
          : (
            <Stack direction='row' spacing={4}>
              <Button type='button' 
                onClick={(e) => {
                  e.preventDefault();
                  setOtpForm(false)
                }} 
                variant='outline'>Back</Button>
              <Button type='submit' variant='primary' flex="1">Verify OTP</Button>
            </Stack>
          )
        }
      </form>
    </>
  )
}

export default SignUp