import { Box } from '@chakra-ui/react'

import { CreatePost, HomeContainer } from './components'

import { ProfileTweet } from 'pages/ProfilePage/components/ProfileTweet'

interface Props {}

export function HomePage(props: Props) {
  return (
    <HomeContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        marginTop={'24px'}
      >
        <CreatePost />
        <ProfileTweet />
      </Box>
    </HomeContainer>
  )
}
