import { Box } from '@chakra-ui/react'

import { ProfileTweet } from './ProfileTweet'

import { type Post } from 'business/posts/usePost'
import { type User } from 'business/user/useUser'

interface Props {
  posts: Post[] | undefined
  author: User | null
}

export function ProfileTweetList({ posts, author }: Props): JSX.Element {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'24px'} width={'100%'}>
      {posts != null &&
        posts.length > 0 &&
        posts.map((post) => (
          <ProfileTweet key={post.id} author={author} post={post} />
        ))}
    </Box>
  )
}
