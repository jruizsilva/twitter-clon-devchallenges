import {
  Box,
  Button,
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
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AiFillCaretDown } from 'react-icons/ai'

import { UserLogo } from './UserLogo'

import { tweeterSmall } from 'assets'

interface Props {}

const user = null

export function Navbar(props: Props) {
  const { pathname } = useLocation()

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
            <Heading size='xs'>
              <Button
                as={NavLink}
                isActive={pathname === '/home'}
                to='/'
                variant='link'
              >
                Home
              </Button>
            </Heading>
          </HStack>
          {user !== null ? (
            <Popover placement='bottom-end'>
              <PopoverTrigger>
                <HStack>
                  <UserLogo imageSize='36' />
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
                {/* <Link to='/'>Settings</Link> */}
                <Divider />
                <Link to='/'>Logout</Link>
              </PopoverContent>
            </Popover>
          ) : (
            <Box display='flex' gap='16px'>
              <Button
                as={NavLink}
                isActive={pathname === '/login'}
                to='/login'
                variant='link'
              >
                Login
              </Button>
              <Button
                as={NavLink}
                isActive={pathname === '/register'}
                to='/register'
                variant='link'
              >
                Register
              </Button>
            </Box>
          )}
        </HStack>
      </Stack>
    </>
  )
}
