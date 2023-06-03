import { Image, type ImageProps } from '@chakra-ui/react'

interface Props {
  imageSize: string
  imageId?: string
  randomImage?: boolean
}

export const UserLogo = ({
  randomImage,
  imageSize,
  imageId = '58',
  ...rest
}: ImageProps & Props) => {
  return (
    <>
      <Image
        alt='profile photo'
        borderRadius='8px'
        height={`${imageSize}px`}
        src={
          randomImage === true && imageId !== undefined
            ? `https://i.pravatar.cc/${imageSize}`
            : `https://i.pravatar.cc/${imageSize}?img=${imageId}`
        }
        width={`${imageSize}px`}
        {...rest}
      />
    </>
  )
}
