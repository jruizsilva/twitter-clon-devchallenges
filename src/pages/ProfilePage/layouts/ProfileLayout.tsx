import {
  Box,
  Button,
  IconButton,
  Image,
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

  console.log(backgroundProfileImageUrl)

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile background image</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={'gray.500'} p={0}>
            <Image
              alt='preview background image'
              height={'160px'}
              objectFit={'cover'}
              src={profileBackground}
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
            <Button colorScheme='whatsapp' flexGrow={'1'} size={'sm'}>
              Change image
            </Button>
            <Button
              colorScheme='messenger'
              flexGrow={'1'}
              size={'sm'}
              type='submit'
            >
              Upload image
            </Button>
            <Button colorScheme='red' size={'sm'} w='full'>
              Delete image uploaded
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
