import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
  InputGroup
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useCallback, useEffect, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import toast, { Toaster } from 'react-hot-toast'

import { type LoginRequest } from '../../services/authService'

import { authService } from 'services/authService'
import { userService } from 'services/userService'
import { useAuthStore } from 'store'
import { useLoadUserData } from 'hooks/useGetUserData'

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset
  } = useForm<LoginRequest>({ mode: 'onBlur' })
  const { loginUser } = authService()
  const [showPassword, setShowPassword] = useState(false)
  const { loadUserData } = useLoadUserData()

  const onSubmit: SubmitHandler<LoginRequest> = async (loginRequest) => {
    await loginUser(loginRequest)
    loadUserData()

    reset()
  }

  return (
    <>
      <Flex
        alignItems={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        justifyContent={'center'}
        minH={'calc(100vh - 100px)'}
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
                <InputGroup>
                  <Input
                    autoComplete='none'
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'password es requerido'
                      },
                      minLength: {
                        value: 4,
                        message: 'password debe tener al menos 4 caracteres'
                      }
                    })}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => {
                        setShowPassword((showPassword) => !showPassword)
                      }}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
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
                  size='lg'
                  type='submit'
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
      <div>
        <Toaster />
      </div>
    </>
  )
}
