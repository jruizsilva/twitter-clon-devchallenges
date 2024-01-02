import { Box, Center, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { CreatePost, HomeContainer } from './components'

import { TweetCard } from 'components/ui/TweetCard'
import { usePost } from 'business/posts/usePost'
import { usePostsStore } from 'business/posts/usePostStore'

interface Props {}

export function HomePage(props: Props) {
  const { fetchAllPosts } = usePost()
  const { posts, setPosts } = usePostsStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllPosts()
      .then((postsData) => {
        setPosts(postsData)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <HomeContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        marginTop={'24px'}
      >
        <CreatePost />
        {loading ? (
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
            <TweetCard
              key={post.id}
              author={post.author}
              post={post}
              showOptionsMenu={false}
            />
          ))
        )}
      </Box>
    </HomeContainer>
  )
}
