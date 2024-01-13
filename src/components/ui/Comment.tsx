import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'

import { UserLogo } from './UserLogo'

import { formatDate } from 'utils/formatDate'

interface Props {
  user: User
  comment: IComment
}

export function Comment({ user, comment }: Readonly<Props>) {
  return (
    <Box display='flex' flexDirection='column' paddingTop='16px' rowGap={1}>
      <Box columnGap={4} display='flex'>
        <UserLogo imageSize='40' user={user} />

        <Box
          backgroundColor='whiteAlpha.50'
          borderRadius='8px'
          display='flex'
          flexDirection='column'
          padding='14px'
          rowGap={1}
          width='100%'
        >
          <Box columnGap={3} display='flex'>
            <Heading size='xs'>{comment.user.name}</Heading>
            <Text color='gray.400' fontSize='xs'>
              {formatDate(comment.createdAt)}
            </Text>
          </Box>
          <Text>{comment.content}</Text>
        </Box>
      </Box>
      <Box alignItems='center' columnGap={2} display='flex' marginLeft='56px'>
        <Button leftIcon={<AiOutlineHeart />} size='sm' variant='ghost'>
          Like
        </Button>
        <Text fontSize='sm'>12k Likes</Text>
      </Box>
    </Box>
  )
}
