import { Image, Stack } from '@chakra-ui/react'

interface Props {}

export function ProfileImage(props: Props) {
  return (
    <>
      <Stack
        alignItems='center'
        backgroundColor='gray.800'
        borderRadius='8px'
        height='122px'
        justifyContent='center'
        position='absolute'
        top='-80px'
        width='122px'
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
