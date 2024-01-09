import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

import { ProfileDescription, ProfileImage } from './components'
import { ProfileContainer } from './components/ProfileContainer'
import { ProfileLayout } from './layouts'
import { PostsCreatedList } from './components/PostsCreatedList'
import { PostsLikedList } from './components/PostsLikedList'

interface Props {}

export function ProfilePage(props: Props) {
  const params = useParams()
  const navigate = useNavigate()

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

        <Button
          onClick={() => {
            navigate(`/profile/${params?.username as string}/postsCreated`)
          }}
        >
          Tweets
        </Button>
        <Button
          onClick={() => {
            navigate(`/profile/${params?.username as string}/postsLiked`)
          }}
        >
          Likes
        </Button>

        <Outlet />
      </ProfileContainer>
    </ProfileLayout>
  )
}
