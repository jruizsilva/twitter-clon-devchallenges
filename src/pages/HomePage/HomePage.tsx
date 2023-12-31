import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

import { CreatePost, HomeContainer } from './components'

import { TweetCard } from 'components/ui/TweetCard'
import { usePost } from 'business/posts/usePost'
import { usePostsStore } from 'business/posts/usePostStore'

interface Props {}

export function HomePage(props: Props) {
  const { fetchAllPosts } = usePost()
  const { posts, setPosts } = usePostsStore()

  useEffect(() => {
    fetchAllPosts()
      .then((postsData) => {
        setPosts(postsData)
      })
      .catch((err) => {
        console.log(err)
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
        {posts !== null &&
          posts?.length > 0 &&
          posts.map((post) => (
            <TweetCard key={post.id} author={post.author} post={post} />
          ))}
      </Box>
    </HomeContainer>
  )
}
