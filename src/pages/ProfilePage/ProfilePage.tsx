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
import { useParams } from 'react-router-dom'

import { ProfileDescription, ProfileImage } from './components'
import { ProfileContainer } from './components/ProfileContainer'
import { ProfileLayout } from './layouts'
import { ProfileTweetList } from './components/ProfileTweetList'

import { usePostsCreatedByUsernameQuery } from 'hooks/queries/usePostsCreatedByUsernameQuery'
import { usePostsLikedByUsernameQuery } from 'hooks/queries/usePostsLikedByUsernameQuery'

interface Props {}

export function ProfilePage(props: Props) {
  const params = useParams()
  const { postsCreated, isLoading } = usePostsCreatedByUsernameQuery(
    params?.username as string
  )
  const { postsLiked } = usePostsLikedByUsernameQuery(
    params?.username as string
  )

  console.log('postsLiked', postsLiked)

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
                  {postsCreated?.length === 0 ? (
                    <Box w={'full'}>
                      <Center>No se encontraron posts</Center>
                    </Box>
                  ) : (
                    <ProfileTweetList posts={postsCreated} />
                  )}
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  alignItems='start'
                  display='flex'
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap={4}
                  justifyContent='space-between'
                  marginTop={{ base: '-30px' }}
                >
                  {postsLiked?.length === 0 ? (
                    <Box w={'full'}>
                      <Center>No se encontraron posts</Center>
                    </Box>
                  ) : (
                    <ProfileTweetList posts={postsLiked} />
                  )}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </ProfileContainer>
    </ProfileLayout>
  )
}
