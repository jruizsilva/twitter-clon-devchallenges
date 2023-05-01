import { Box, Button, Heading, Text, calc } from '@chakra-ui/react'
import { MdPersonAdd } from 'react-icons/md'

interface Props {}

export function ProfileDescription(props: Props) {
  return (
    <>
      <Box
        backgroundColor='gray.700'
        borderRadius='12px'
        maxWidth='100%'
        minHeight={{ base: '246px', md: '163px' }}
        padding={{ base: '16px', md: '12px 24px' }}
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
          marginTop={{ base: '36px', md: 0 }}
          position='relative'
          width={{
            md: calc('100%').subtract('172px').toString()
          }}
        >
          <Heading size='lg'>Daniel Jensen</Heading>
          <Box
            columnGap={5}
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            marginBottom={{ base: 5, md: 0 }}
            rowGap={1}
          >
            <Box display='flex' gap={1}>
              <Text as='span' fontWeight='bold'>
                2,569
              </Text>
              <Text>Following</Text>
            </Box>
            <Box display='flex' gap={1}>
              <Text as='span' fontWeight='bold'>
                10.8K
              </Text>
              <Text>Followers</Text>
            </Box>
          </Box>
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
            right={{ lg: 0 }}
            top={{ lg: '4px' }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </>
  )
}
