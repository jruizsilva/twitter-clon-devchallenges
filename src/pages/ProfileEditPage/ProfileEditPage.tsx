import { SmallCloseIcon } from '@chakra-ui/icons'
import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

export function ProfileEditPage() {
  return (
    <Flex
      align={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      justify={'center'}
      minH={'100vh'}
    >
      <Stack
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        maxW={'md'}
        my={12}
        p={6}
        rounded={'xl'}
        spacing={4}
        w={'full'}
      >
        <Heading fontSize={{ base: '2xl', sm: '3xl' }} lineHeight={1.1}>
          User Profile Edit
        </Heading>
        <FormControl id='userName'>
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size='xl' src='https://bit.ly/sage-adebayo'>
                <AvatarBadge
                  aria-label='remove Image'
                  as={IconButton}
                  colorScheme='red'
                  icon={<SmallCloseIcon />}
                  rounded='full'
                  size='sm'
                  top='-10px'
                />
              </Avatar>
            </Center>
            <Center w='full'>
              <Button w='full'>Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl isRequired id='userName'>
          <FormLabel>User name</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            placeholder='UserName'
            type='text'
          />
        </FormControl>
        <FormControl isRequired id='email'>
          <FormLabel>Email address</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            placeholder='your-email@example.com'
            type='email'
          />
        </FormControl>
        <FormControl isRequired id='password'>
          <FormLabel>Password</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            placeholder='password'
            type='password'
          />
        </FormControl>
        <Stack direction={['column', 'row']} spacing={6}>
          <Button
            _hover={{
              bg: 'red.500'
            }}
            bg={'red.400'}
            color={'white'}
            w='full'
          >
            Cancel
          </Button>
          <Button
            _hover={{
              bg: 'blue.500'
            }}
            bg={'blue.400'}
            color={'white'}
            w='full'
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
