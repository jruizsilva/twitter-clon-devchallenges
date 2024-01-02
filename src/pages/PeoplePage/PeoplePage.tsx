import { useEffect, useState } from 'react'
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

import { ListCardPeople, PeopleContainer } from './components'

import { type User, useUser } from 'business/user/useUser'
import { useUserStore } from 'business/user/useUserStore'

interface Props {}

interface FormValues {
  peapleToSearch: string
}

export function PeoplePage(props: Props): JSX.Element {
  const { fetchAllUsers, fetchSearchUsersByUsernameOrName } = useUser()
  const { users, setUsers } = useUserStore()
  const [searchResult, setSearchResult] = useState<User[] | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<FormValues>({ mode: 'onBlur' })

  useEffect(() => {
    fetchAllUsers()
      .then((users) => {
        setUsers(users)
        setSearchResult(users)
      })
      .catch((err: any) => {
        console.error(err)
      })
  }, [fetchAllUsers, setUsers, setSearchResult])
  const onSubmit: SubmitHandler<FormValues> = async (formValues) => {
    if (formValues.peapleToSearch.trim().length === 0) {
      setSearchResult(users)

      return
    }
    fetchSearchUsersByUsernameOrName(formValues.peapleToSearch)
      .then((users) => {
        setSearchResult(users)
      })
      .catch((err: any) => {
        console.error(err)
      })
  }

  return (
    <PeopleContainer>
      <Box as='form' onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isInvalid={Boolean(errors.peapleToSearch)}
          maxWidth={'664px'}
          mx={'auto'}
        >
          <InputGroup size='lg'>
            <Input
              autoComplete='off'
              placeholder='Search people'
              pr='4.5rem'
              type='text'
              {...register('peapleToSearch', {
                minLength: {
                  value: 2,
                  message: 'debe tener al menos 2 caracteres'
                }
              })}
            />
            <InputRightElement mr={'4px'} width='80px'>
              <Button
                isDisabled={!isValid}
                isLoading={isSubmitting}
                type='submit'
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.peapleToSearch?.message}</FormErrorMessage>
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
