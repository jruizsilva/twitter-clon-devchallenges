import { Box } from '@chakra-ui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function HomeContainer({ children }: Props) {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        margin='auto'
        maxWidth='745px'
        width={{ base: '95%' }}
      >
        {children}
      </Box>
    </>
  )
}
