import { Box, Center, Heading, Spinner, Text } from '@chakra-ui/react'

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

  return (
    <BookmarksContainer>
      <Heading textAlign={'center'}>Bookmarks saved</Heading>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        marginTop={'24px'}
      >
        {isLoading && (
          <Center
            display={'flex'}
            flexDirection={'column'}
            gap={'24px'}
            height={'100px'}
          >
            <Spinner size={'md'} />
          </Center>
        )}

        {!isLoading && postsSaved?.length === 0 && (
          <Center
            display={'flex'}
            flexDirection={'column'}
            gap={'24px'}
            height={'100px'}
          >
            <Text>No ha guardado ningun post todavia</Text>
          </Center>
        )}

        {!isLoading &&
          postsSaved !== undefined &&
          postsSaved.length > 0 &&
          postsSaved.map((post) => (
            <TweetCard key={post.id} post={post} showOptionsMenu={true} />
          ))}
      </Box>
    </BookmarksContainer>
  )
}
