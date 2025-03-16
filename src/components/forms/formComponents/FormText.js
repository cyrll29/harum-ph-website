import React from 'react'
import { Input, Box, Text } from '@chakra-ui/react'

const FormText = ({
  register,
  errors,
  title,
  name,
  fieldType,
  validation
}) => {
  return (
    <Box display={'flex'} flexDirection={'column'} rowGap={2}>
      <Text>{title}</Text>
      <Input 
        {...register(name, {
          required: `${title} is required`,
          ...validation
        })} 
        placeholder={title} 
        type={fieldType} 
        variant='flushed'
      />
      {
        errors[name] && (<Text color='red'>{errors[name].message}</Text>)
      }
    </Box>
  )
}

export default FormText