import {
  useColorModeValue,
  Avatar,
  Heading,
  Stack,
  Button,
  Box,
  Text
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { useFindUserByUsernameQuery } from 'hooks/queries/useFindUserByUsernameQuery'
import { useUserImages } from 'hooks/useUserImages'

interface Props {
  user: User | null
}

export function CardPeople({ user }: Readonly<Props>): JSX.Element {
  const { userProfile } = useFindUserByUsernameQuery(user?.username as string)
  const { userLogoUrl } = useUserImages(userProfile?.username as string)

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      maxW={'320px'}
      p={6}
      rounded={'lg'}
      textAlign={'center'}
      w={'full'}
    >
      <Avatar
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: 'green.300',
          border: '2px solid white',
          rounded: 'full',
          pos: 'absolute',
          bottom: 0,
          right: 3
        }}
        mb={4}
        pos={'relative'}
        size={'xl'}
        src={userLogoUrl}
      />
      <Heading fontFamily={'body'} fontSize={'2xl'}>
        <Text
          _hover={{ textDecoration: 'underline' }}
          as={NavLink}
          to={`/profile/${user?.username as string}/postsCreated`}
        >
          {user?.name}
        </Text>
      </Heading>
      <Text color={'gray.500'} fontWeight={600} mb={4}>
        @{user?.username}
      </Text>
      <Text
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}
        textAlign={'center'}
      >
        {user?.description}
      </Text>

      <Stack direction={'row'} mt={8} spacing={4}>
        <Button
          isDisabled
          _focus={{
            bg: 'blue.500'
          }}
          _hover={{
            bg: 'blue.500'
          }}
          bg={'blue.400'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          color={'white'}
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
        >
          Follow
        </Button>
      </Stack>
    </Box>
  )
}
