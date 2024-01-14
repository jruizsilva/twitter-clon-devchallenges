import { SmallCloseIcon } from '@chakra-ui/icons'
import {
  Avatar,
  AvatarBadge,
  Box,
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
import { useRef, useState } from 'react'

import { UpdateUserForm } from './components/UpdateUserForm'

import { useUploadProfileImage } from 'hooks/mutations/useUploadProfileImage'
import { useDeleteProfileImageMutation } from 'hooks/mutations/useDeleteProfileImageMutation'
import { useAppStore } from 'store/useAppStore'
import { useUserImages } from 'hooks/useUserImages'

export function ProfileEditPage() {
  const userAuthenticated = useAppStore((store) => store.userAuthenticated)
  const { uploadProfileImage, isPending: isUploadPending } =
    useUploadProfileImage()

  const { userLogoUrl } = useUserImages(userAuthenticated?.username as string)
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const { deleteProfileImage, isPending: isDeletePending } =
    useDeleteProfileImageMutation()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
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
              <Box
                alignContent={'center'}
                alignItems={'center'}
                display={'flex'}
                flexWrap={'wrap'}
                gap={'8px'}
                w='full'
              >
                <Input
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  type='file'
                  onChange={handleFileChange}
                />
                <Button
                  colorScheme='whatsapp'
                  flexGrow={'1'}
                  size={'sm'}
                  onClick={handleButtonClick}
                >
                  Change image
                </Button>
                <Button
                  colorScheme='messenger'
                  flexGrow={'1'}
                  isDisabled={profileImage === null || isUploadPending}
                  isLoading={isUploadPending}
                  size={'sm'}
                  type='submit'
                >
                  Upload image
                </Button>
                <Button
                  colorScheme='red'
                  isDisabled={userLogoUrl === undefined || isDeletePending}
                  isLoading={isDeletePending}
                  size={'sm'}
                  w='full'
                  onClick={handleDeletImageUploaded}
                >
                  Delete image uploaded
                </Button>
              </Box>
            </Stack>
          </FormControl>
        </Stack>
        <UpdateUserForm />
      </Stack>
    </Flex>
  )
}
