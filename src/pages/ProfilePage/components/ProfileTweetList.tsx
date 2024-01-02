import { Box } from '@chakra-ui/react'

import { TweetCard } from '../../../components/ui/TweetCard'

import { type Post } from 'business/posts/usePost'
import { type User } from 'business/user/useUser'

interface Props {
  posts: Post[] | null
  author: User | null
}

export function ProfileTweetList({
  posts,
  author
}: Readonly<Props>): JSX.Element {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'24px'} width={'100%'}>
      {posts != null &&
        posts.length > 0 &&
        posts.map((post) => (
          <TweetCard
            key={post.id}
            showOptionsMenu
            author={author}
            post={post}
          />
        ))}
    </Box>
  )
}
