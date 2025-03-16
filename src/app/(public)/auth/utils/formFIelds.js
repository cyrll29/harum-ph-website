import { validateEmail, validatePassword, validatePhoneNumber } from "@/utils/validation"

export const SignInForms = [
  {
    fieldType: 'email',
    title: 'Email',
    fieldName: 'email',
    validate: {
      required: 'Email is required',
      validate: (value) => validateEmail(value) || 'Invalid email address'
    }
  },
  {
    fieldType: 'password',
    title: 'Password',
    fieldName: 'password',
  }
]

export const SignUpForms = [
  {
    fieldType: 'text',
    title: 'First Name',
    fieldName: 'firstName'
  },
  {
    fieldType: 'text',
    title: 'Last Name',
    fieldName: 'lastName'
  },
  {
    fieldType: 'tel',
    title: 'Phone Number',
    fieldName: 'phoneNumber',
    validate: {
      required: 'Phone number is required',
      validate: (value) => validatePhoneNumber(value) || 'Invalid phone number'
    }
  },
  {
    fieldType: 'text',
    title: 'Username',
    fieldName: 'username'
  },
  {
    fieldType: 'email',
    title: 'Email',
    fieldName: 'email',
    validate: {
      required: 'Email is required',
      validate: (value) => validateEmail(value) || 'Invalid email address'
    }
  },
  {
    fieldType: 'password',
    title: 'Password',
    fieldName: 'password',
    validate: {
      required: 'Password is required',
      validate: (value) => validatePassword(value) || 'Password must be at least 8 characters'
    }
  }
]
