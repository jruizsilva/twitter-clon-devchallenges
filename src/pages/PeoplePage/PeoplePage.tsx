import {
  InputGroup,
  Input,
  FormControl,
  Box,
  Center,
  Spinner
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

import { CardPeople, PeopleContainer } from './components'

import { useUsersQuery } from 'hooks/queries/userUsersQuery'

interface Props {}

export function PeoplePage(props: Props): JSX.Element {
  const { users, isLoading } = useUsersQuery()
  const [searchResult, setSearchResult] = useState<User[]>([])

  const originalUsers = useRef<User[]>([])

  if (users !== undefined && originalUsers.current.length === 0) {
    originalUsers.current = users
    setSearchResult(users)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value

    if (search.trim().length === 0) {
      setSearchResult(originalUsers.current)

      return
    }

    const filteredUsers = users?.filter((user) => {
      const { username, name } = user

      return (
        username.toLowerCase().includes(search.toLowerCase()) ||
        name.toLowerCase().includes(search.toLowerCase())
      )
    })

    setSearchResult(filteredUsers ?? [])
  }

  return (
    <PeopleContainer>
      <Box>
        <FormControl maxWidth={'664px'} mx={'auto'}>
          <InputGroup size='lg'>
            <Input
              autoComplete='off'
              placeholder='Search people'
              pr='4.5rem'
              type='text'
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
      </Box>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          gap={'24px'}
          justifyContent={{ base: 'center' }}
          mx={'auto'}
          pt='48px'
          width={'100%'}
        >
          {isLoading && (
            <Center>
              <Spinner />
            </Center>
          )}
          {!isLoading && searchResult.length === 0 && (
            <Center>No se encontraron resultados</Center>
          )}
          {!isLoading &&
            searchResult.length > 0 &&
            searchResult.map((user) => (
              <CardPeople key={user.id} user={user} />
            ))}
        </Box>
      )}
    </PeopleContainer>
  )
}
