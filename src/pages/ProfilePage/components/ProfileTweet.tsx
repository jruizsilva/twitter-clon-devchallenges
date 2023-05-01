import { Box, Heading, Image, Text } from '@chakra-ui/react'

interface Props {}

export function ProfileTweet(props: Props) {
  return (
    <>
      <Box
        backgroundColor='gray.700'
        borderRadius='8px'
        marginTop='12px'
        padding='16px'
      >
        <Box display='flex' gap={3}>
          <Image
            alt='profile photo'
            borderRadius='8px'
            height='40px'
            src='https://i.pravatar.cc/40'
            width='40px'
          />
          <Box display='flex' flexDirection='column' rowGap={1}>
            <Heading size='sm'>Peyton Lyons</Heading>
            <Text fontSize='xs'>24 August at 20:43 </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}
