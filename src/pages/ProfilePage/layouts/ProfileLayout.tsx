import {
  Box,
  Button,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { MdEdit } from 'react-icons/md'
import { useRef, useState } from 'react'

import { useBackgroundProfileImage } from 'hooks/useBackgroundProfileImage'
import { profileBackground } from 'assets'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileLayout({ children }: Readonly<Props>) {
  const params = useParams()
  const { backgroundProfileImageUrl } = useBackgroundProfileImage(
    params?.username as string
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profileBackgroundImage, setProfileBackgroundImage] =
    useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    setProfileBackgroundImage(selectedFile as File)
  }

  const handleChangeImageClick = () => {
    fileInputRef.current?.click()
  }

  const showPreviewImage = () => {
    if (profileBackgroundImage !== null) {
      return URL.createObjectURL(profileBackgroundImage)
    }

    return undefined
  }

  const handleCloseModal = () => {
    setProfileBackgroundImage(null)
    onClose()
  }

  return (
    <>
      <Box paddingBottom={60} position={'relative'}>
        <IconButton
          _hover={{ color: 'blackAlpha.900' }}
          aria-label='change background image'
          bg={'whiteAlpha.900'}
          color={'blackAlpha.800'}
          icon={<MdEdit size={'20px'} />}
          position={'absolute'}
          right={'12px'}
          rounded={'full'}
          top={'12px'}
          zIndex={10}
          onClick={onOpen}
        />
        <Image
          alt='user profilebackground image'
          fallbackSrc={backgroundProfileImageUrl}
          height={{
            base: '168px',
            md: '300px'
          }}
          objectFit='cover'
          opacity={backgroundProfileImageUrl === undefined ? '0.3' : '0.5'}
          src={profileBackground}
          width='100%'
        />
        {children}
      </Box>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile background image</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={'gray.500'} p={0}>
            <Image
              alt='preview background image'
              height={'160px'}
              objectFit={'cover'}
              src={
                showPreviewImage() !== undefined
                  ? showPreviewImage()
                  : profileBackground
              }
              width={'100%'}
            />
          </ModalBody>

          <ModalFooter
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
              onClick={handleChangeImageClick}
            >
              Change image
            </Button>
            <Button
              colorScheme='messenger'
              flexGrow={'1'}
              isDisabled={profileBackgroundImage === null}
              size={'sm'}
              type='submit'
            >
              Upload image
            </Button>
            <Button
              colorScheme='red'
              isDisabled={backgroundProfileImageUrl === undefined}
              size={'sm'}
              w='full'
            >
              Delete image uploaded
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
