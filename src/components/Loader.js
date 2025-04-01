import React from 'react';
import {
  Flex,
  Spinner,
  Text,
  Box,
  useColorModeValue
} from '@chakra-ui/react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  // Color mode values for light/dark theme support
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="200px"
      w="100%"
      h="100%"
      bg={bgColor}
      p={4}
      borderRadius="md"
      boxShadow="sm"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      
      <Box mt={4}>
        <Text
          fontSize="lg"
          fontWeight="medium"
          color={textColor}
        >
          {message}
        </Text>
      </Box>
    </Flex>
  );
};

export default LoadingSpinner;