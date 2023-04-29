import { ProfileDescription, ProfileImage } from './components'
import { ProfileLayout } from './layouts'

interface Props {}

export function ProfilePage(props: Props) {
  return (
    <>
      <ProfileLayout>
        <ProfileImage />
        <ProfileDescription />
      </ProfileLayout>
    </>
  )
}
