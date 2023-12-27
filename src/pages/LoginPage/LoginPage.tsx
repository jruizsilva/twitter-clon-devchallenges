import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { type LoginRequest } from '../../services/authService'

import { authService } from 'services/authService'

export function LoginPage() {
  const { login } = authService()

  return (
    <Flex
      alignItems={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      justifyContent={'center'}
      minH={'calc(100vh - 140px)'}
    >
      <Stack maxW={'full'} mx={'auto'} w={{ base: 'full', sm: 'md', md: 'lg' }}>
        <Stack align={'center'} mb={2}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          maxW={'full'}
          p={8}
          rounded={'lg'}
          w={{ base: 'full', sm: 'md', md: 'lg' }}
        >
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={10}>
              <Button
                _hover={{
                  bg: 'blue.500'
                }}
                bg={'blue.400'}
                color={'white'}
                onClick={() => {
                  const loginRequest: LoginRequest = {
                    username: 'user',
                    password: 'user'
                  }

                  login(loginRequest)
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Don&apos;t have an account?{' '}
                <Link as={NavLink} color={'blue.400'} to='/register'>
                  Register
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
