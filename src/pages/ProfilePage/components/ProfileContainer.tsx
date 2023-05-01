import { Box } from '@chakra-ui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileContainer({ children }: Props) {
  return (
    <>
      <Box margin='auto' width='90%'>
        {children}
      </Box>
    </>
  )
}
