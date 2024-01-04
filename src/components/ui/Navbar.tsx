import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react'
import { AiFillCaretDown } from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom'

import { UserLogo } from './UserLogo'

import { tweeterSmall } from 'assets'
import { useAuthStore } from 'business/auth/useAuthStore'

interface Props {}

export function Navbar(props: Props) {
  const { pathname } = useLocation()
  const { user, setUser } = useAuthStore()

  const logout = () => {
    localStorage.removeItem('AUTH_TOKEN')
  }

  return (
    <Stack
      as='header'
      backgroundColor={'gray.900'}
      height='70px'
      justifyContent={'center'}
      paddingX='16px'
      position={'sticky'}
      top={'0'}
      zIndex={'10'}
    >
      <HStack justifyContent='space-between'>
        <HStack as={NavLink} to={''}>
          <Image alt='tweeter small' src={tweeterSmall} width='41px' />
          <Heading size='md'>Tweeter</Heading>
        </HStack>
        <HStack
          as='nav'
          display={{ base: 'none', md: 'flex' }}
          spacing={{ base: '0', md: '32px', lg: '64px', xl: '80px' }}
        >
          {user !== null && (
            <>
              <Heading size='xs'>
                <Button
                  as={NavLink}
                  isActive={pathname === '/'}
                  to='/'
                  variant='link'
                >
                  Home
                </Button>
              </Heading>

              <Heading size='xs'>
                <Button
                  as={NavLink}
                  isActive={pathname === '/people'}
                  to='/people'
                  variant='link'
                >
                  People
                </Button>
              </Heading>
            </>
          )}
        </HStack>

        <Box display={'flex'}>
          {user !== null ? (
            <Menu>
              <MenuButton>
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
                    {user.name}
                  </Heading>
                  <Icon
                    as={AiFillCaretDown}
                    display={{
                      base: 'none',
                      md: 'block'
                    }}
                  />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem as={NavLink} to={'/profile'}>
                  Profile
                </MenuItem>
                <MenuItem as={NavLink} to={'/profile/edit'}>
                  Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem>Open...</MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={() => {
                    logout()
                    setUser(null)
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
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
        </Box>
      </HStack>
    </Stack>
  )
}
