import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import { useEffect } from 'react'

import { ProfileDescription, ProfileImage } from './components'
import { ProfileContainer } from './components/ProfileContainer'
import { ProfileLayout } from './layouts'
import { ProfileTweetList } from './components/ProfileTweetList'

import { useAuthStore } from 'business/auth/useAuthStore'
import { usePostsStore } from 'business/posts/usePostStore'
import { usePost } from 'business/posts/usePost'

interface Props {}

export function ProfilePage(props: Props) {
  const { user } = useAuthStore()
  const { fetchAllPostOfCurrentUser } = usePost()
  const { userPosts, setUserPosts } = usePostsStore()

  useEffect(() => {
    fetchAllPostOfCurrentUser()
      .then((userPosts) => {
        setUserPosts(userPosts)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [fetchAllPostOfCurrentUser, setUserPosts])

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
        <Tabs isFitted isLazy size={'md'}>
          <TabList mb='42px'>
            <Tab>Tweets</Tab>
            <Tab>Likes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box
                alignItems='start'
                display='flex'
                flexDirection={{ base: 'column', md: 'row' }}
                gap={4}
                justifyContent='space-between'
                marginTop={{ base: '-30px' }}
              >
                {userPosts?.length === 0 ? (
                  <Box w={'full'}>
                    <Center>No se encontraron posts</Center>
                  </Box>
                ) : (
                  <ProfileTweetList author={user} posts={userPosts} />
                )}
              </Box>
            </TabPanel>
            <TabPanel>
              <p>likes</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ProfileContainer>
    </ProfileLayout>
  )
}
