import { BookmarksContainer } from './components/BookmarksContainer'

import { useUserQuery } from 'hooks/queries/useUserQuery'
import { usePostsSavedByUsernameQuery } from 'hooks/queries/usePostsSavedByUsernameQuery'

interface Props {}

export function BookmarksPage(props: Props): JSX.Element {
  const { user } = useUserQuery()
  const { postsSaved, isLoading } = usePostsSavedByUsernameQuery(
    user?.username as string
  )

  console.log('postsSaved', postsSaved)

  return (
    <BookmarksContainer>
      <h1>Bookmarks saved</h1>
    </BookmarksContainer>
  )
}
