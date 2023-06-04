import { Box, Button, Divider, Text, Textarea } from '@chakra-ui/react'

import { UserLogo } from 'components/ui'

interface Props {}

export function CreatePost(props: Props) {
  return (
    <>
      <Box
        backgroundColor='gray.700'
        borderRadius='12px'
        minHeight='155px'
        paddingX='20px'
        paddingY='12px'
        width='100%'
      >
        <Text fontWeight='bold' paddingBottom='8px'>
          Tweet something
        </Text>
        <Divider marginBottom='8px' />
        <Box marginBottom='16px' position='relative'>
          <UserLogo imageSize='40' left='8px' position='absolute' top='8px' />
          <Textarea
            paddingLeft='58px'
            placeholder='What’s happening?'
            resize='vertical'
            variant='unstyled'
          />
        </Box>
        <Box display='flex' justifyContent='end'>
          {/* <Button size='md' variant='ghost'>
            <Icon as={LuImage} boxSize={5} />
          </Button> */}
          {/* <Button leftIcon={<BsGlobeAmericas />} variant='ghost'>
            Everyone can reply
          </Button> */}
          <Button>Tweet</Button>
        </Box>
      </Box>
    </>
  )
}
