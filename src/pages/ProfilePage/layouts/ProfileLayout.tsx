import { Image, VStack } from '@chakra-ui/react'

import { profileBackground } from 'assets'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileLayout({ children }: Props) {
  return (
    <>
      <VStack position='relative' zIndex={-1}>
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
      </VStack>
    </>
  )
}
