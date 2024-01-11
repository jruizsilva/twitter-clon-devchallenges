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
import { useRef, useState } from 'react'

import { useProfileImage } from '../../hooks/useProfileImage'

import { useUserQuery } from 'hooks/queries/useUserQuery'
import { useUpdateUserMutation } from 'hooks/mutations/useUpdateUserMutation'
import { useUploadProfileImage } from 'hooks/mutations/useUploadProfileImage'
import { useDeleteProfileImageMutation } from 'hooks/mutations/useDeleteProfileImageMutation'

export function ProfileEditPage() {
  const { user } = useUserQuery()
  const { uploadProfileImage } = useUploadProfileImage()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue
  } = useForm<UpdateUserRequest>({
    mode: 'onBlur',
    defaultValues: {
      name: user?.name,
      description: user?.description
    }
  })
  const profileImageUrl = useProfileImage()
  const { updateUser, data: userUpdated } = useUpdateUserMutation(
    user?.username as string
  )
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const { deleteProfileImage, isPending } = useDeleteProfileImageMutation()

  if (userUpdated !== undefined) {
    setValue('name', userUpdated.name)
    setValue('description', userUpdated.description)
  }

  const onSubmit: SubmitHandler<UpdateUserRequest> = async (
    updateUserRequest: UpdateUserRequest
  ) => {
    updateUser(updateUserRequest)
  }
  const onCancel = () => {
    setValue('name', user?.name)
    setValue('description', user?.description)
  }

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    // Simula un clic en el input de tipo archivo cuando se hace clic en el botón
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aquí puedes manejar el cambio de archivo según tus necesidades
    const selectedFile = e.target.files?.[0]

    setProfileImage(selectedFile as File)
  }

  const handleUploadImageSubmit = async (
    e: React.FormEvent<HTMLDivElement>
  ) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      if (profileImage === null) {
        console.error('No se ha seleccionado ninguna imagen')

        return
      }
      formData.append('profileImage', profileImage)
      uploadProfileImage(formData)
      setProfileImage(null)
    } catch (error) {
      console.error('Error al subir la imagen:', error)
    }
  }

  const resetProfileImage = () => {
    setProfileImage(null)
  }

  const showPreviewImage = () => {
    if (profileImage !== null) {
      return URL.createObjectURL(profileImage)
    }

    return undefined
  }

  const handleDeletImageUploaded = () => {
    deleteProfileImage()
  }

  return (
    <Flex
      align={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      justify={'center'}
      minH={'100vh - 100px'}
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
        onSubmit={handleUploadImageSubmit}
      >
        <Heading fontSize={{ base: '2xl', sm: '3xl' }} lineHeight={1.1}>
          User Profile Edit
        </Heading>
        <Stack as={'form'} onSubmit={handleUploadImageSubmit}>
          <FormControl id='userIcon'>
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size='xl' src={showPreviewImage()}>
                  <AvatarBadge
                    aria-label='remove Image'
                    as={IconButton}
                    colorScheme='red'
                    icon={<SmallCloseIcon />}
                    rounded='full'
                    size='sm'
                    top='-10px'
                    onClick={resetProfileImage}
                  />
                </Avatar>
              </Center>
              <Center flexWrap={'wrap'} gap={'8px'} w='full'>
                <Input
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  type='file'
                  onChange={handleFileChange}
                />
                <Button
                  colorScheme='whatsapp'
                  size={'sm'}
                  w='full'
                  onClick={handleButtonClick}
                >
                  Change image
                </Button>
                <Button
                  colorScheme='messenger'
                  isDisabled={profileImage === null}
                  size={'sm'}
                  type='submit'
                  w='full'
                >
                  Upload image
                </Button>
                <Button
                  colorScheme='red'
                  isDisabled={profileImageUrl === undefined || isPending}
                  isLoading={isPending}
                  size={'sm'}
                  w='full'
                  onClick={handleDeletImageUploaded}
                >
                  Delete image uploaded
                </Button>
              </Center>
            </Stack>
          </FormControl>
        </Stack>
        <Stack as={'form'} onSubmit={handleSubmit(onSubmit)}>
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
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
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
            <FormErrorMessage>{errors?.description?.message}</FormErrorMessage>
          </FormControl>
        </Stack>

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
