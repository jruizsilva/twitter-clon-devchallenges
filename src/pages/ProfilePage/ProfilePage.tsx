import {
  Box,
  Center,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'

import { ProfileDescription, ProfileImage } from './components'
import { ProfileContainer } from './components/ProfileContainer'
import { ProfileLayout } from './layouts'
import { ProfileTweetList } from './components/ProfileTweetList'

import { useUserPostsQuery } from 'hooks/queries/useUserPostsQuery'

interface Props {}

export function ProfilePage(props: Props) {
  const { userPosts, isLoading } = useUserPostsQuery()

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
        {isLoading ? (
          <Center
            display={'flex'}
            flexDirection={'column'}
            gap={'24px'}
            height={'100px'}
          >
            <Spinner size={'md'} />
          </Center>
        ) : (
          <Tabs isFitted size={'md'}>
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
                    <ProfileTweetList posts={userPosts} />
                  )}
                </Box>
              </TabPanel>
              <TabPanel>
                <p>likes</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </ProfileContainer>
    </ProfileLayout>
  )
}
