import { Box, Button, Heading, Text, calc } from '@chakra-ui/react'
import { MdPersonAdd } from 'react-icons/md'

import { useUserQuery } from 'hooks/queries/useUserQuery'

interface Props {}

export function ProfileDescription(props: Props) {
  const { user } = useUserQuery()

  return (
    <Box
      backgroundColor='gray.700'
      borderRadius='12px'
      maxWidth='100%'
      minHeight={{ base: '246px', md: '163px' }}
      padding={{ base: '16px', md: '12px 24px' }}
      width='100%'
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
        <Box>
          <Heading display={'inline-block'} size='lg' textAlign='center'>
            {user?.name}
          </Heading>{' '}
          <Text color={'gray.500'} display={'inline-block'} fontWeight={600}>
            @{user?.username}
          </Text>
        </Box>

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
              {0}
            </Text>
            <Text>Following</Text>
          </Box>
          <Box display='flex' gap={1}>
            <Text as='span' fontWeight='bold'>
              {0}
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
          {user?.description}
        </Text>
        {/* Agregar funcionalidad seguir usuarios */}
        <Button
          colorScheme='blue'
          isDisabled={true}
          leftIcon={<MdPersonAdd />}
          position={{ lg: 'absolute' }}
          right={{ lg: 0 }}
          top={{ lg: '4px' }}
        >
          Follow
        </Button>
      </Box>
    </Box>
  )
}
