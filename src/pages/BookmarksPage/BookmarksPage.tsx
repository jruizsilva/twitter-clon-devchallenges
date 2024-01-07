import { useEffect } from 'react'

import { BookmarksContainer } from './components/BookmarksContainer'

import { useBookmarks } from 'business/bookmarks/useBookmarks'
import { useBookmarksStore } from 'business/bookmarks/useBookmarksStore'
import { useAuthStore } from 'business/auth/useAuthStore'

interface Props {}

export function BookmarksPage(props: Props): JSX.Element {
  const { user } = useAuthStore()
  const { fetchAllBookmarkedPostsByUsername } = useBookmarks()
  const { setBookmarksSaved, bookmarksSaved } = useBookmarksStore()

  useEffect(() => {
    if (user == null) {
      return
    }
    fetchAllBookmarkedPostsByUsername(user?.username)
      .then((bookmarksSaved) => {
        console.log(bookmarksSaved)
        setBookmarksSaved(bookmarksSaved)
      })
      .catch((err) => {
        console.dir(err)
      })
  }, [fetchAllBookmarkedPostsByUsername, setBookmarksSaved, user])

  return (
    <BookmarksContainer>
      <h1>Bookmarks saved {bookmarksSaved.length}</h1>
    </BookmarksContainer>
  )
}
