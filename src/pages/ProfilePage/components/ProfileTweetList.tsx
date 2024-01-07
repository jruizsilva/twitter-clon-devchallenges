import { Box } from '@chakra-ui/react'

import { TweetCard } from '../../../components/ui/TweetCard'

interface Props {
  posts: Post[] | undefined
}

export function ProfileTweetList({ posts }: Readonly<Props>): JSX.Element {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'24px'} width={'100%'}>
      {posts !== undefined &&
        posts.length > 0 &&
        posts.map((post) => (
          <TweetCard key={post.id} showOptionsMenu post={post} />
        ))}
    </Box>
  )
}
