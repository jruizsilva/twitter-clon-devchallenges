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
import { useEffect, useState } from 'react'

import { useFindUserByUsernameQuery } from 'hooks/queries/useFindUserByUsernameQuery'
import { useUserImages } from 'hooks/useUserImages'
import { useToggleFollowerMutation } from 'hooks/mutations/useToggleFollowerMutation'
import { useAppStore } from 'store/useAppStore'
import { useFindAllUsersFollowingQuery } from 'hooks/queries/useFindAllUsersFollowingQuery'

interface Props {
  user: User | null
}

export function CardPeople({ user }: Readonly<Props>): JSX.Element {
  const userAuthenticated = useAppStore((store) => store.userAuthenticated)
  const { userProfile } = useFindUserByUsernameQuery(user?.username as string)
  const { userLogoUrl } = useUserImages(userProfile?.username as string)
  const { toggleFollow, isPending: isPendingToggleFollow } =
    useToggleFollowerMutation(user?.username as string)
  const [isFollowing, setIsFollowing] = useState(false)
  const { usersFollowing, isPending: isPendingFindAllFollowing } =
    useFindAllUsersFollowingQuery(userAuthenticated?.username as string)

  useEffect(() => {
    if (user === null || usersFollowing === undefined) {
      return
    }
    const isFollowing = usersFollowing.some(
      (follower) => follower.id === user.id
    )

    setIsFollowing(isFollowing)
  }, [user, usersFollowing])

  const handleFollowButton = () => {
    toggleFollow(isFollowing)
    setIsFollowing((prev) => !prev)
  }

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
        // _after={{
        //   content: '""',
        //   w: 4,
        //   h: 4,
        //   // bg: 'green.300',
        //   bg: 'gray.300',
        //   border: '2px solid white',
        //   rounded: 'full',
        //   pos: 'absolute',
        //   bottom: 0,
        //   right: 3
        // }}
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
          colorScheme='blue'
          flexGrow={1}
          fontSize={'sm'}
          isDisabled={
            isPendingToggleFollow ||
            isPendingFindAllFollowing ||
            userAuthenticated?.id === user?.id
          }
          isLoading={isPendingToggleFollow || isPendingFindAllFollowing}
          rounded={'full'}
          variant={isFollowing ? 'outline' : 'solid'}
          onClick={handleFollowButton}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </Stack>
    </Box>
  )
}
