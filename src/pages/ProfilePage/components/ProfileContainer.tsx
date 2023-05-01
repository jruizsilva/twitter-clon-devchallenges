import { Box } from '@chakra-ui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function ProfileContainer({ children }: Props) {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        margin='auto'
        width={{ base: '95%', lg: '90%' }}
      >
        {children}
      </Box>
    </>
  )
}
