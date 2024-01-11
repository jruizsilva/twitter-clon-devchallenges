import { Avatar, type AvatarProps } from '@chakra-ui/react'
import { useMemo } from 'react'

import { useProfileImage } from '../../hooks/useProfileImage'

import { useUserQuery } from 'hooks/queries/useUserQuery'
import { baseUrl } from 'utils/baseUrl'

interface Props {
  imageSize: string
}

export const UserLogo = ({ imageSize, ...rest }: AvatarProps & Props) => {
  const profileImageUrl = useProfileImage()

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
