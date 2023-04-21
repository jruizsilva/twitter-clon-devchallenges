import { Image, Stack } from '@chakra-ui/react'

interface Props {}

export function ProfileImage(props: Props) {
  return (
    <>
      <Stack
        alignItems='center'
        borderRadius='8px'
        height='122px'
        justifyContent='center'
        position='relative'
        width='122px'
        zIndex='1'
      >
        <Image
          alt='profile phote'
          borderRadius='8px'
          height='116px'
          src={`https://i.pravatar.cc/116`}
          width='116px'
        />
      </Stack>
    </>
  )
}
