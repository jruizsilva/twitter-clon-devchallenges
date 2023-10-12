import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

export function LoginPage() {
  return (
    <Flex
      align={'center'}
      // bg={useColorModeValue('gray.50', 'gray.800')}
      justify={'center'}
      minH={"calc('100vh - 70px')"}
    >
      <Stack maxW={'lg'} mx={'auto'} px={6} py={12} spacing={8}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          rounded={'lg'}
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
              {/* <Stack
                align={'start'}
                direction={{ base: 'column', sm: 'row' }}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack> */}
              <Button
                _hover={{
                  bg: 'blue.500'
                }}
                bg={'blue.400'}
                color={'white'}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
