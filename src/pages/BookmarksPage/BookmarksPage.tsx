import { useEffect } from 'react'

import { BookmarksContainer } from './components/BookmarksContainer'

import { useUserQuery } from 'hooks/useUserQuery'
import { fetchAllBookmarkedPostsByUsername } from 'services/bookmarks'

interface Props {}

export function BookmarksPage(props: Props): JSX.Element {
  const { user } = useUserQuery()

  useEffect(() => {
    if (user == null) {
      return
    }
    fetchAllBookmarkedPostsByUsername(user?.username)
      .then((bookmarksSaved) => {
        console.log(bookmarksSaved)
      })
      .catch((err) => {
        console.dir(err)
      })
  }, [user])

  return (
    <BookmarksContainer>
      <h1>Bookmarks saved</h1>
    </BookmarksContainer>
  )
}
