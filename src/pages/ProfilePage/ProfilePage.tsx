import { ProfileDescription, ProfileImage } from './components'
import { ProfileLayout, ProfileInfoLayout } from './layouts'

interface Props {}

export function ProfilePage(props: Props) {
  return (
    <>
      <ProfileLayout>
        <ProfileInfoLayout>
          <ProfileImage />
          <ProfileDescription />
        </ProfileInfoLayout>
      </ProfileLayout>
    </>
  )
}
