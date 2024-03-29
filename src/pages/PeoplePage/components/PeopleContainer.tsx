import { Box } from '@chakra-ui/react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function PeopleContainer({ children }: Readonly<Props>) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      margin='auto'
      maxWidth='745px'
      pb={'96px'}
      pt={'48px'}
      width={{ base: '95%' }}
    >
      {children}
    </Box>
  )
}
