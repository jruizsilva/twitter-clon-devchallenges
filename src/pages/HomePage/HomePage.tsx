import { Box, Center, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'

import { CreatePost, HomeContainer } from './components'

import { TweetCard } from 'components/ui/TweetCard'
import { usePostsQuery } from 'hooks/usePostsQuery'

interface Props {}

export function HomePage(props: Props) {
  const { posts, isLoading } = usePostsQuery()

  return (
    <HomeContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        marginTop={'24px'}
      >
        <CreatePost />
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
          posts !== undefined &&
          posts?.length > 0 &&
          posts.map((post) => (
            <TweetCard key={post.id} post={post} showOptionsMenu={false} />
          ))
        )}
      </Box>
    </HomeContainer>
  )
}
