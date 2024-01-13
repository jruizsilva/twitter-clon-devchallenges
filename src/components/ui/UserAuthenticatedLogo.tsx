import { Avatar, type AvatarProps } from '@chakra-ui/react'

import { useProfileImage } from '../../hooks/useProfileImage'

import { useImagesUserAuthenticated } from 'hooks/useImagesUserAuthenticated'

interface Props {
  imageSize: string
}

export const UserAuthenticatedLogo = ({
  imageSize,
  ...rest
}: AvatarProps & Props) => {
  const { profileImageUserAuthenticatedUrl } = useImagesUserAuthenticated()

  return (
    <Avatar
      alt='profile photo'
      borderRadius='8px'
      height={`${imageSize}px`}
      src={profileImageUserAuthenticatedUrl}
      width={`${imageSize}px`}
      {...rest}
    />
  )
}
