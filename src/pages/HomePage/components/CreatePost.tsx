import { Box, Divider, Text } from '@chakra-ui/react'

import { UserLogo } from 'components/ui'

interface Props {}

export function CreatePost(props: Props) {
  return (
    <>
      <Box
        backgroundColor='gray.700'
        borderRadius='12px'
        height='155px'
        paddingX='20px'
        width='100%'
      >
        <Text fontWeight='bold' paddingBottom='8px' paddingTop='12px'>
          Tweet something
        </Text>
        <Divider />
        <UserLogo imageSize='40' />
      </Box>
    </>
  )
}
