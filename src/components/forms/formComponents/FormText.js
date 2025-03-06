import React from 'react'
import { Input, Box, Text } from '@chakra-ui/react'

const FormText = ({
  register,
  title,
  fieldType
}) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Input {...register(title)} placeholder={title} type={fieldType} />
    </Box>
  )
}

export default FormText