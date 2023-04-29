import { Stack } from '@chakra-ui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileInfoLayout({ children }: Props) {
  return (
    <>
      <Stack
        alignItems='center'
        height='100%'
        margin='auto'
        maxWidth='1073px'
        position='relative'
        top='-42px'
        width='90%'
      >
        {children}
      </Stack>
    </>
  )
}
