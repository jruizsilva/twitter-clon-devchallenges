import { Box, Image, Stack } from '@chakra-ui/react'

import { tweeterSmall } from 'assets'

interface Props {}

export function Navbar(props: Props) {
  return (
    <>
      <Stack
        as='header'
        flexDirection='row'
        flexWrap='nowrap'
        height='68px'
        justifyContent='space-between'
        padding='20px 16px'
        width='100%'
      >
        <Box>
          <Image alt='tweeter small' src={tweeterSmall} width='41px' />
        </Box>
        <Box>
          <Image
            alt='tweeter small'
            borderRadius='8px'
            src={`https://i.pravatar.cc/50`}
            width='41px'
          />
        </Box>
      </Stack>
    </>
  )
}
