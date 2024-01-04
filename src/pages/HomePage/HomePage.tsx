import { Box, Center, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'

import { CreatePost, HomeContainer } from './components'

import { TweetCard } from 'components/ui/TweetCard'
import { usePost } from 'business/posts/usePost'
import { usePostsStore } from 'business/posts/usePostStore'

interface Props {}

export function HomePage(props: Props) {
  const { fetchAllPosts } = usePost()
  const { posts, setPosts, isFetching } = usePostsStore()

  console.log(posts)

  useEffect(() => {
    fetchAllPosts()
      .then((postsData) => {
        setPosts(postsData)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [fetchAllPosts, setPosts])

  return (
    <HomeContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        marginTop={'24px'}
      >
        <CreatePost />
        {isFetching ? (
          <Center
            display={'flex'}
            flexDirection={'column'}
            gap={'24px'}
            height={'100px'}
          >
            <Spinner size={'md'} />
          </Center>
        ) : (
          posts !== null &&
          posts?.length > 0 &&
          posts.map((post) => (
            <TweetCard key={post.id} post={post} showOptionsMenu={false} />
          ))
        )}
      </Box>
    </HomeContainer>
  )
}
