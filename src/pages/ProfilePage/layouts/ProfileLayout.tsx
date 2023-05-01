import { Box, Image } from '@chakra-ui/react'

import { profileBackground } from 'assets'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileLayout({ children }: Props) {
  return (
    <>
      <Box height='3000px'>
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

        {children}
      </Box>
    </>
  )
}
