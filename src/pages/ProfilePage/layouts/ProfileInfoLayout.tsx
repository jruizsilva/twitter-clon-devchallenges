import { Stack } from '@chakra-ui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileInfoLayout({ children }: Props) {
  return (
    <>
      <Stack alignItems='center' position='absolute' top='62px'>
        {children}
      </Stack>
    </>
  )
}
