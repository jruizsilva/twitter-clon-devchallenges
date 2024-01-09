import { BookmarksContainer } from './components/BookmarksContainer'

interface Props {}

export function BookmarksPage(props: Props): JSX.Element {
  return (
    <BookmarksContainer>
      <h1>Bookmarks saved</h1>
    </BookmarksContainer>
  )
}
