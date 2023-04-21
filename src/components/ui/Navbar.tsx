import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  VStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'

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
          <Popover placement='bottom-end'>
            <PopoverTrigger>
              <HStack>
                <Image
                  alt='tweeter small'
                  borderRadius='8px'
                  src={`https://i.pravatar.cc/50`}
                  width='41px'
                />
                <Heading size='xs' userSelect='none'>
                  Xanthe Neal
                </Heading>
                <AiFillCaretDown />
              </HStack>
            </PopoverTrigger>
            <PopoverContent borderRadius='12px' padding='14px' width='192px'>
              <Link to='/profile/1'>My profile</Link>
              <Link to='/'>Group Chat</Link>
              <Link to='/'>Settings</Link>
              <Divider />
              <Link to='/'>Logout</Link>
            </PopoverContent>
          </Popover>
        </Box>
      </Stack>
    </>
  )
}
