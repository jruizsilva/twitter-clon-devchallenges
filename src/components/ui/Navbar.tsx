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

interface Props {}

const user = true

export function Navbar(props: Props) {
  const { pathname } = useLocation()

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
        <HStack as={NavLink} to={'/'}>
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
            </MenuButton>
            <MenuList>
              <MenuItem as={NavLink} to={'/profile/1'}>
                Profile
              </MenuItem>
              <MenuItem as={NavLink} to={'/profile/edit/1'}>
                Settings
              </MenuItem>
              <MenuDivider />
              <MenuItem>Open...</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
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
      </HStack>
    </Stack>
  )
}
