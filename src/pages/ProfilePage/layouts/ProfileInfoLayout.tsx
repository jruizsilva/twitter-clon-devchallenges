import { Stack } from '@chakra-ui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileInfoLayout({ children }: Props) {
  return (
    <>
      <Stack alignItems='center' position='relative' top='-42px'>
        {children}
      </Stack>
    </>
  )
}
