import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { type LoginRequest } from '../../services/authService'

import { authService } from 'services/authService'

interface FormValues {
  username: string
  password: string
}

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid }
  } = useForm<FormValues>({ mode: 'onBlur' })
  const { login } = authService()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  console.log(errors)
  console.log('isvalid', isValid)

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
            <FormControl
              isRequired
              id='username'
              isInvalid={Boolean(errors.username)}
            >
              <FormLabel>Username</FormLabel>
              <Input
                autoComplete='none'
                type='text'
                {...register('username', {
                  required: { value: true, message: 'username es requerido' },
                  minLength: {
                    value: 4,
                    message: 'username debe tener al menos 4 caracteres'
                  }
                })}
              />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              id='password'
              isInvalid={Boolean(errors.password)}
            >
              <FormLabel>Password</FormLabel>
              <Input
                autoComplete='none'
                type='password'
                {...register('password', {
                  required: { value: true, message: 'password es requerido' },
                  minLength: {
                    value: 4,
                    message: 'password debe tener al menos 4 caracteres'
                  }
                })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Button
                _hover={{
                  bg: 'blue.500'
                }}
                bg={'blue.400'}
                color={'white'}
                isDisabled={!isValid}
                isLoading={isSubmitting}
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
