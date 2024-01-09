import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import { ProfileDescription, ProfileImage } from './components'
import { ProfileContainer } from './components/ProfileContainer'
import { ProfileLayout } from './layouts'
import { PostsCreatedList } from './components/PostsCreatedList'
import { PostsLikedList } from './components/PostsLikedList'

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

        <Tabs isFitted size={'md'}>
          <TabList mb='42px'>
            <Tab>Tweets</Tab>
            <Tab>Likes</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PostsCreatedList />
            </TabPanel>
            <TabPanel>
              <PostsLikedList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ProfileContainer>
    </ProfileLayout>
  )
}
