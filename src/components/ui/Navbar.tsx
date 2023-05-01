import {
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'

import { tweeterSmall } from 'assets'

interface Props {}

export function Navbar(props: Props) {
  return (
    <>
      <Stack as='header' padding='20px 16px'>
        <HStack justifyContent='space-between'>
          <HStack>
            <Image alt='tweeter small' src={tweeterSmall} width='41px' />
            <Heading size='md'>Tweeter</Heading>
          </HStack>
          <HStack
            as='nav'
            display={{ base: 'none', md: 'flex' }}
            spacing={{ base: '0', md: '32px', lg: '64px', xl: '80px' }}
          >
            <Heading size='xs'>Home</Heading>
            <Heading size='xs'>Explore</Heading>
            <Heading size='xs'>Bookmarks</Heading>
          </HStack>
          <Popover placement='bottom-end'>
            <PopoverTrigger>
              <HStack>
                <Image
                  alt='tweeter small'
                  borderRadius='8px'
                  src={`https://i.pravatar.cc/50`}
                  width='36px'
                />
                <Heading
                  display={{
                    base: 'none',
                    md: 'block'
                  }}
                  size='xs'
                  userSelect='none'
                >
                  Xanthe Neal
                </Heading>
                <Icon
                  as={AiFillCaretDown}
                  display={{
                    base: 'none',
                    md: 'block'
                  }}
                />
              </HStack>
            </PopoverTrigger>
            <PopoverContent
              borderRadius='12px'
              padding='14px'
              width={{ base: '100%', md: '192px' }}
            >
              <Link to='/profile/1'>My profile</Link>
              <Link to='/'>Group Chat</Link>
              <Link to='/'>Settings</Link>
              <Divider />
              <Link to='/'>Logout</Link>
            </PopoverContent>
          </Popover>
        </HStack>
      </Stack>
    </>
  )
}
