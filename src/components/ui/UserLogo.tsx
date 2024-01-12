import { Avatar, type AvatarProps } from '@chakra-ui/react'

import { useProfileImage } from '../../hooks/useProfileImage'

import { useUserQuery } from 'hooks/queries/useUserQuery'

interface Props {
  imageSize: string
}

export const UserLogo = ({ imageSize, ...rest }: AvatarProps & Props) => {
  const { user } = useUserQuery()
  const profileImageUrl = useProfileImage(user?.username as string)

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
