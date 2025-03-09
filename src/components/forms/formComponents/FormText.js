import React from 'react'
import { Input, Box, Text } from '@chakra-ui/react'

const FormText = ({
  register,
  title,
  name,
  fieldType
}) => {
  return (
    <Box display={'flex'} flexDirection={'column'} rowGap={2}>
      <Text>{title}</Text>
      <Input {...register(name)} placeholder={title} type={fieldType} variant='flushed'/>
    </Box>
  )
}

export default FormText