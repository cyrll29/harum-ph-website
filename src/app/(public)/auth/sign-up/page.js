'use client';

// UI Related
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Text, Stack, useToast } from '@chakra-ui/react'

// Firebase
import { auth } from '@/services/firebase/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// Functions
import { generateFormField } from '@/components/forms/utils/generateFormField'

// Utils
 import { SignUpForms } from '../utils/formFIelds'

const SignUp = () => {
  const [otpForm, setOtpForm] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const toast = useToast();

  const onSubmit = async (data) => {
    console.log(data);
    if (otpForm === false) {
      await sendOtp(data)
      setOtpForm(true)
      return;
    }
    const { email, password } = data;
    verifyOtp(data)
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    try {
      await sendEmailVerification(userCredentials.user)
      toast({
        title: "Email Verification has been sent",
        description: 'The email for verification of your account has been sent to your email',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (err) {
      toast({
        title: "There was an error sending the email",
        description: err.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
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
            generateFormField({ 
              fieldType: form.fieldType, 
              register,
              errors, 
              title: form.title, 
              name: form.fieldName, 
              index: i,
              validate: form.validate 
            })
          ))
          : (
            generateFormField({ 
              fieldType: 'number', 
              register, 
              errors,
              title: 'Verify OTP', 
              name: 'otp', 
              index: 0 })
          )
        }
        <Stack direction={otpForm ? 'row' : 'column'} spacing={4}>
          {otpForm && (
            <Button 
              type='button'
              onClick={(e) => {
                e.preventDefault();
                setOtpForm(false);
              }}
              variant='outline'
            >
              Back
            </Button>
          )}
          <Button 
            type='submit' 
            variant={otpForm ? 'primary' : 'outline'} 
            flex={otpForm ? "1" : undefined}
          >
            {otpForm ? 'Verify OTP' : 'Continue'}
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default SignUp