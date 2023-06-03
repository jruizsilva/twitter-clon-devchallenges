import {
  Box,
  Divider,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  Textarea
} from '@chakra-ui/react'

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
        <Box marginY='8px' position='relative'>
          <UserLogo imageSize='40' left='8px' position='absolute' top='8px' />
          <Textarea paddingLeft='58px' placeholder='What’s happening?' />
        </Box>
      </Box>
    </>
  )
}
