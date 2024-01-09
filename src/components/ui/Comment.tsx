import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'

import { UserLogo } from './UserLogo'

interface Props {}

export function Comment(props: Props) {
  return (
    <Box display='flex' flexDirection='column' paddingTop='16px' rowGap={1}>
      <Box columnGap={4} display='flex'>
        <UserLogo randomImage imageSize='40' />

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
            <Heading size='xs'>Waqar Bloom</Heading>
            <Text color='gray.400' fontSize='xs'>
              24 August at 20:43
            </Text>
          </Box>
          <Text>
            I’ve seen awe-inspiring things that I thought I’d never be able to
            explain to another person.
          </Text>
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
