import { Box, Center, Heading, Spinner } from '@chakra-ui/react'

import { BookmarksContainer } from './components/BookmarksContainer'

import { usePostsSavedByUsernameQuery } from 'hooks/queries/usePostsSavedByUsernameQuery'
import { TweetCard } from 'components/ui/TweetCard'
import { useAppStore } from 'store/useAppStore'

interface Props {}

export function BookmarksPage(props: Props): JSX.Element {
  const userAuthenticated = useAppStore((store) => store.userAuthenticated)
  const { postsSaved, isLoading } = usePostsSavedByUsernameQuery(
    userAuthenticated?.username as string
  )

  console.log('postsSaved', postsSaved)

  return (
    <BookmarksContainer>
      <Heading textAlign={'center'}>Bookmarks saved</Heading>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        marginTop={'24px'}
      >
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
          postsSaved !== undefined &&
          postsSaved?.length > 0 &&
          postsSaved.map((post) => (
            <TweetCard key={post.id} post={post} showOptionsMenu={true} />
          ))
        )}
      </Box>
    </BookmarksContainer>
  )
}
