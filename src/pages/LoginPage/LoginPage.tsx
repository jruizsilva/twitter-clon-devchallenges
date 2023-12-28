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
import { useForm, type SubmitHandler } from 'react-hook-form'

import { type LoginRequest } from '../../services/authService'

import { authService } from 'services/authService'

interface FormValues {
  username: string
  password: string
}

export function LoginPage() {
  const { register, handleSubmit } = useForm()
  const { login } = authService()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Flex
      alignItems={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      justifyContent={'center'}
      minH={'calc(100vh - 140px)'}
    >
      <Stack
        as={'form'}
        maxW={'full'}
        mx={'auto'}
        w={{ base: 'full', sm: 'md', md: 'lg' }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
            <FormControl id='username'>
              <FormLabel>Username</FormLabel>
              <Input type='text' {...register('username')} />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input type='password' {...register('password')} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                _hover={{
                  bg: 'blue.500'
                }}
                bg={'blue.400'}
                color={'white'}
                type='submit'
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
