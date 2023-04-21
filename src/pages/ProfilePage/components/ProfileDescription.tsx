import { Button, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { MdPersonAdd } from 'react-icons/md'

interface Props {}

export function ProfileDescription(props: Props) {
  return (
    <>
      <Stack
        backgroundColor='#222'
        borderRadius='12px'
        height={{ base: '246px' }}
        justifyContent='center'
        position='absolute'
        top='149px'
        width={{ base: '345px' }}
      >
        <VStack spacing={4}>
          <Heading size='lg'>Daniel Jensen</Heading>
          <HStack spacing={5}>
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
          <Text textAlign={{ base: 'center' }}>
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </Text>
          <Button colorScheme='blue' leftIcon={<MdPersonAdd />} mt={8}>
            Follow
          </Button>
        </VStack>
      </Stack>
    </>
  )
}
