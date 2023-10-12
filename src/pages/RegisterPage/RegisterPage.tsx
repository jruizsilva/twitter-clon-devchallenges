import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'

interface Props {}

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      align={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      justify={'center'}
      minH={"calc('100vh - 70px')"}
    >
      <Stack
        maxW={{ base: 'md', lg: 'lg' }}
        mx={'auto'}
        px={6}
        py={12}
        spacing={8}
        w={'full'}
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up</Heading>
        </Stack>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          rounded={'lg'}
        >
          <Stack spacing={4}>
            <FormControl isRequired id='email'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl isRequired id='password'>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
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
            </FormControl>
            <Stack pt={2} spacing={10}>
              <Button
                _hover={{
                  bg: 'blue.500'
                }}
                bg={'blue.400'}
                color={'white'}
                loadingText='Submitting'
                size='lg'
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
