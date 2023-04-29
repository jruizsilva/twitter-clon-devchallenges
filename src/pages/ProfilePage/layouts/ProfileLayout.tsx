import { Box, Image, VStack } from '@chakra-ui/react'

import { profileBackground } from 'assets'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileLayout({ children }: Props) {
  return (
    <>
      <VStack>
        <Image
          alt='profile background from unsplash'
          height={{
            base: '168px',
            md: '300px'
          }}
          objectFit='cover'
          src={profileBackground}
          width='100%'
        />
        <Box
          maxWidth={{ md: '1073px' }}
          minHeight={{ md: '163px' }}
          minWidth={{ md: '90%' }}
        >
          {children}
        </Box>
      </VStack>
    </>
  )
}
