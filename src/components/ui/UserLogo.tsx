import { Image, type ImageProps } from '@chakra-ui/react'
import { useMemo } from 'react'

import { useUserQuery } from 'hooks/queries/useUserQuery'
import { baseUrl } from 'utils/baseUrl'

const defaultImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTs4XdD00sHtFKBYeyzKvz1CUHr598N0yrUA&usqp=CAU'

interface Props {
  imageSize: string
}

export const UserLogo = ({ imageSize, ...rest }: ImageProps & Props) => {
  const { user } = useUserQuery()
  const { profileImage } = user as { profileImage: string | null }

  const profileImagePath = useMemo(() => {
    if (profileImage === null) {
      return undefined
    }

    return `${baseUrl}/${profileImage}`
  }, [profileImage])

  return (
    <Image
      alt='profile photo'
      borderRadius='8px'
      fallbackSrc={defaultImageUrl}
      height={`${imageSize}px`}
      src={profileImagePath}
      width={`${imageSize}px`}
      {...rest}
    />
  )
}
