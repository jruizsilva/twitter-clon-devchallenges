import { Box } from '@chakra-ui/react'

import { ProfileDescription, ProfileImage } from './components'
import { ProfileContainer } from './components/ProfileContainer'
import { ProfileLayout } from './layouts'
import { ProfileFilter } from './components/ProfileFilter'
import { ProfileTweet } from './components/ProfileTweet'

interface Props {}

export function ProfilePage(props: Props) {
  return (
    <ProfileLayout>
      <ProfileContainer>
        <Box
          alignItems='center'
          display='flex'
          justifyContent='center'
          margin='auto'
          position='relative'
          top='-42px'
          width='100%'
        >
          <ProfileImage />
          <ProfileDescription />
        </Box>
        <Box
          alignItems='start'
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          gap={4}
          justifyContent='space-between'
          marginTop={{ base: '-30px' }}
        >
          <ProfileFilter />
          <ProfileTweet />
        </Box>
      </ProfileContainer>
    </ProfileLayout>
  )
}
