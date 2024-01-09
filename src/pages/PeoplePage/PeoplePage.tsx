import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  Box,
  Spinner,
  Center
} from '@chakra-ui/react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useRef, useState } from 'react'

import { ListCardPeople, PeopleContainer } from './components'

import { useUsersQuery } from 'hooks/queries/userUsersQuery'

interface Props {}

interface SearchUserRequest {
  peapleToSearch: string
}

export function PeoplePage(props: Props): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting }
  } = useForm<SearchUserRequest>({ mode: 'onBlur' })

  const { users } = useUsersQuery()
  const [searchResult, setSearchResult] = useState<User[]>([])

  const originalUsers = useRef<User[]>([])

  if (users !== undefined && originalUsers.current.length === 0) {
    originalUsers.current = users
    setSearchResult(users)
  }

  const onSubmit: SubmitHandler<SearchUserRequest> = async (formValues) => {
    if (formValues.peapleToSearch.trim().length === 0 || users === undefined) {
      setSearchResult(originalUsers.current)

      return
    }
    // :TODO eliminar duplicados
    const filteredUsers = users.filter((user) => {
      const result = []

      users.forEach((user) => {
        result.push(
          user.name
            .toLowerCase()
            .includes(formValues.peapleToSearch.toLowerCase())
        )
      })

      return user.name
        .toLowerCase()
        .includes(formValues.peapleToSearch.toLowerCase())
    })

    setSearchResult(filteredUsers)
  }

  return (
    <PeopleContainer>
      <Box as='form' onSubmit={handleSubmit(onSubmit)}>
        <FormControl maxWidth={'664px'} mx={'auto'}>
          <InputGroup size='lg'>
            <Input
              autoComplete='off'
              placeholder='Search people'
              pr='4.5rem'
              type='text'
              {...register('peapleToSearch')}
            />
            <InputRightElement mr={'4px'} width='80px'>
              <Button isLoading={isSubmitting} type='submit'>
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>
      {isSubmitting ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <ListCardPeople users={searchResult} />
      )}
    </PeopleContainer>
  )
}
