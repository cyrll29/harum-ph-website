import React from 'react'
import { Input, Box, Text } from '@chakra-ui/react'

const FormText = ({
  register,
  title,
}) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Input {...register(title)} placeholder={title} />
    </Box>
  )
}

export default FormText