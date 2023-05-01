import { Box } from '@chakra-ui/react'

import { ProfileDescription, ProfileImage } from './components'
import { ProfileContainer } from './components/ProfileContainer'
import { ProfileLayout } from './layouts'

interface Props {}

export function ProfilePage(props: Props) {
  return (
    <>
      <ProfileLayout>
        <ProfileContainer>
          <Box
            alignItems='center'
            display='flex'
            justifyContent='center'
            position='relative'
            top='-42px'
          >
            <ProfileImage />
            <ProfileDescription />
          </Box>
        </ProfileContainer>
      </ProfileLayout>
    </>
  )
}
