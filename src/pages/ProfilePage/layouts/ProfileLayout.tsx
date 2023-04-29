import { Box, Image, Stack } from '@chakra-ui/react'

import { profileBackground } from 'assets'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileLayout({ children }: Props) {
  return (
    <>
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
        alignItems='center'
        display='flex'
        justifyContent='center'
        position='relative'
        top='-42px'
      >
        {children}
      </Box>
    </>
  )
}
