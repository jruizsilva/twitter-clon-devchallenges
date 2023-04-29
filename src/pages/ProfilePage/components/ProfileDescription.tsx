import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  Stack,
  calc
} from '@chakra-ui/react'
import { MdPersonAdd } from 'react-icons/md'

interface Props {}

export function ProfileDescription(props: Props) {
  return (
    <>
      <Stack
        backgroundColor='gray.700'
        borderRadius='12px'
        height={{ base: '246px', md: '100%' }}
        justifyContent={{
          base: 'end',
          md: 'start'
        }}
        padding={{ base: '16px', md: '12px 24px' }}
        width={{ base: '345px', md: '100%' }}
      >
        <Box
          alignItems={{ base: 'center', md: 'end' }}
          display='flex'
          flexDirection={{
            base: 'column',
            md: 'row'
          }}
          flexWrap={{
            md: 'wrap'
          }}
          gap={{ md: 5 }}
          marginLeft={{ base: '0', md: 'auto' }}
          width={{
            md: calc('100%').subtract('172px').toString()
          }}
        >
          <Heading size='lg'>Daniel Jensen</Heading>
          <HStack marginBottom={{ base: 5, md: 0 }} spacing={5}>
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
          <Text
            flexBasis={{
              md: '100%'
            }}
            marginBottom={{ base: 5, md: 0 }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </Text>
          <Button
            colorScheme='blue'
            leftIcon={<MdPersonAdd />}
            position={{ lg: 'absolute' }}
            right={{ lg: '24px' }}
            top={{ lg: '24px' }}
          >
            Follow
          </Button>
        </Box>
      </Stack>
    </>
  )
}
