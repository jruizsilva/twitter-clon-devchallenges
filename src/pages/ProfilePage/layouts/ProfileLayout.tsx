import { Box, Image } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { useBackgroundProfileImage } from 'hooks/useBackgroundProfileImage'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileLayout({ children }: Readonly<Props>) {
  const params = useParams()
  const { backgroundProfileImageUrl } = useBackgroundProfileImage(
    params?.username as string
  )

  console.log(backgroundProfileImageUrl)

  return (
    <Box paddingBottom={60}>
      <Image
        alt='user profilebackground image'
        height={{
          base: '168px',
          md: '300px'
        }}
        objectFit='cover'
        src={backgroundProfileImageUrl}
        width='100%'
      />

      {children}
    </Box>
  )
}
