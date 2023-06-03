import { CreatePost, HomeContainer } from './components'

interface Props {}

export function HomePage(props: Props) {
  return (
    <>
      <HomeContainer>
        <CreatePost />
      </HomeContainer>
    </>
  )
}
