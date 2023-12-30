import { Box } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export function PeopleContainer({ children }: Props) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      margin='auto'
      maxWidth='745px'
      py={'48px'}
      width={{ base: '95%' }}
    >
      {children}
    </Box>
  )
}
