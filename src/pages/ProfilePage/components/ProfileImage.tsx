import { Image, Stack } from '@chakra-ui/react'

import { UserLogo } from 'components/ui'

interface Props {}

export function ProfileImage(props: Props) {
  return (
    <Stack
      alignItems='center'
      backgroundColor='gray.800'
      borderRadius='8px'
      height={{
        base: '122px',
        md: '160px'
      }}
      justifyContent='center'
      left={{
        md: '24px'
      }}
      position='absolute'
      top={{
        base: '-80px',
        md: '-50px'
      }}
      width={{
        base: '122px',
        md: '160px'
      }}
    >
      <UserLogo
        height={{
          base: '116px',
          md: '152px'
        }}
        imageSize='152'
        width={{
          base: '116px',
          md: '152px'
        }}
      />
    </Stack>
  )
}
