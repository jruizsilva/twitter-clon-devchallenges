import { Box } from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'

import { CreatePost, HomeContainer } from './components'

import { ProfileTweet } from 'pages/ProfilePage/components/ProfileTweet'
import { usePostsStore } from 'store'
import { postService } from 'services/postService'

interface Props {}

export function HomePage(props: Props) {
  const { findAll } = postService()
  const { posts, setPosts } = usePostsStore()

  const getPostsAndSave = useCallback(() => {
    findAll()
      .then((postsData) => {
        console.log(postsData)
        if (postsData !== null && postsData !== undefined) {
          setPosts(postsData)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    getPostsAndSave()
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
          posts.map((post) => <ProfileTweet key={post.id} post={post} />)}
      </Box>
    </HomeContainer>
  )
}
