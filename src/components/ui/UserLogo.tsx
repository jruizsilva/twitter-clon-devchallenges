import { Avatar, type AvatarProps } from '@chakra-ui/react'

import { useProfileImage } from '../../hooks/useProfileImage'

interface Props {
  imageSize: string
  user: User
}

export const UserLogo = ({ imageSize, user, ...rest }: AvatarProps & Props) => {
  const { profileImageUrl } = useProfileImage(user?.username)

  return (
    <Avatar
      alt='profile photo'
      borderRadius='8px'
      height={`${imageSize}px`}
      src={profileImageUrl}
      width={`${imageSize}px`}
      {...rest}
    />
  )
}
