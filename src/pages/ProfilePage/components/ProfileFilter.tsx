import { Box, Text } from '@chakra-ui/react'

interface Props {}

export function ProfileFilter(props: Props) {
  return (
    <>
      <Box
        backgroundColor='gray.700'
        borderRadius='8px'
        marginTop={{ base: '-30px' }}
        maxWidth={{ base: '100%', md: '304px' }}
        p='24px'
      >
        <Text>Tweets</Text>
        <Text>Tweets & replies</Text>
        <Text>Media</Text>
        <Text>Likes</Text>
      </Box>
    </>
  )
}
