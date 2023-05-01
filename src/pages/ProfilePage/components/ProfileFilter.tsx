import { Box, Text } from '@chakra-ui/react'

interface Props {}

export function ProfileFilter(props: Props) {
  return (
    <>
      <Box
        backgroundColor='gray.700'
        borderRadius='8px'
        p='24px'
        width={{ base: '100%', md: '304px' }}
      >
        <Text>Tweets</Text>
        <Text>Tweets & replies</Text>
        <Text>Media</Text>
        <Text>Likes</Text>
      </Box>
    </>
  )
}
