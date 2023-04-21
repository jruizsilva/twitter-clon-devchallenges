import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Stack
} from '@chakra-ui/react'
import { MdPersonAdd } from 'react-icons/md'

interface Props {}

export function ProfileDescription(props: Props) {
  return (
    <>
      <Stack
        backgroundColor='gray.700'
        borderRadius='12px'
        height={{ base: '246px' }}
        justifyContent='end'
        padding='16px'
        width={{ base: '345px' }}
      >
        <Box alignItems='center' display='flex' flexDirection='column'>
          <Heading marginBottom='4px' size='lg'>
            Daniel Jensen
          </Heading>
          <HStack marginBottom='16px' spacing={5}>
            <HStack spacing={1}>
              <Text as='span' fontWeight='bold'>
                2,569
              </Text>
              <Text>Following</Text>
            </HStack>
            <HStack spacing={1}>
              <Text as='span' fontWeight='bold'>
                10.8K
              </Text>
              <Text>Followers</Text>
            </HStack>
          </HStack>
          <Text marginBottom='16px' textAlign={{ base: 'center' }}>
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </Text>
          <Button colorScheme='blue' leftIcon={<MdPersonAdd />}>
            Follow
          </Button>
        </Box>
      </Stack>
    </>
  )
}
