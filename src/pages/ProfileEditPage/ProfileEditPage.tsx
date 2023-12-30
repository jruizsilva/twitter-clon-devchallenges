import { SmallCloseIcon } from '@chakra-ui/icons'
import {
  Avatar,
  AvatarBadge,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useUser, type UpdateUserRequest } from '../../business/user/useUser'

import { useAuthStore } from 'business/auth/useAuthStore'

export function ProfileEditPage() {
  const { user, setUser } = useAuthStore()
  const { updateUser } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    reset
  } = useForm<UpdateUserRequest>({
    mode: 'onBlur',
    defaultValues: {
      name: user?.name,
      description: user?.description
    }
  })

  const onSubmit: SubmitHandler<UpdateUserRequest> = async (
    updateUserRequest: UpdateUserRequest
  ) => {
    try {
      const userUpdated = await updateUser(updateUserRequest)

      setUser(userUpdated)
      toast.success('Update successfuly')
      setValue('name', userUpdated.name)
      setValue('description', userUpdated.description)
    } catch (err: any) {
      const errorMessage =
        err.response.data.message !== null
          ? err.response.data.message
          : err.message

      toast.error(errorMessage)
      console.log(err)
    }
  }
  const onCancel = () => {
    reset()
  }

  return (
    <Flex
      align={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      justify={'center'}
      minH={'100vh - 100px'}
    >
      <Stack
        as={'form'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        maxW={'md'}
        my={12}
        p={6}
        rounded={'xl'}
        spacing={4}
        w={'full'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading fontSize={{ base: '2xl', sm: '3xl' }} lineHeight={1.1}>
          User Profile Edit
        </Heading>
        <FormControl id='userIcon'>
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
        <FormControl id='name' isInvalid={Boolean(errors.name)}>
          <FormLabel>Name</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            placeholder='Name'
            type='text'
            {...register('name', {
              minLength: {
                value: 4,
                message: 'name debe tener al menos 4 caracteres'
              }
            })}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id='description' isInvalid={Boolean(errors.description)}>
          <FormLabel>Description</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            placeholder='Description'
            type='text'
            {...register('description', {
              minLength: {
                value: 4,
                message: 'description debe tener al menos 4 caracteres'
              }
            })}
          />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>
        {/* <FormControl isRequired id='password'>
          <FormLabel>Password</FormLabel>
          <Input
            _placeholder={{ color: 'gray.500' }}
            placeholder='Password'
            type='password'
          />
        </FormControl> */}
        <Stack direction={['column', 'row']} spacing={6}>
          <Button
            _hover={{
              bg: 'red.500'
            }}
            bg={'red.400'}
            color={'white'}
            w='full'
            onClick={() => {
              onCancel()
            }}
          >
            Cancel
          </Button>
          <Button
            _hover={{
              bg: 'blue.500'
            }}
            bg={'blue.400'}
            color={'white'}
            isDisabled={!isValid}
            isLoading={isSubmitting}
            type='submit'
            w='full'
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
