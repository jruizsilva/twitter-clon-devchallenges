import { useEffect } from 'react'
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

import { fetchAllUsers, fetchSearchUsersByUsernameOrName } from 'services/user'
import { useUsersQuery } from 'hooks/userUsersQuery'

interface Props {}

interface SearchUserRequest {
  peapleToSearch: string
}

export function PeoplePage(props: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<SearchUserRequest>({ mode: 'onBlur' })

  const { users } = useUsersQuery()

  console.log(users)

  const onSubmit: SubmitHandler<SearchUserRequest> = async (formValues) => {
    if (formValues.peapleToSearch.trim().length === 0) {
      return
    }
    fetchSearchUsersByUsernameOrName(formValues.peapleToSearch)
      .then((users) => {
        console.log(users)
      })
      .catch((err: unknown) => {
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
        <ListCardPeople users={users} />
      )}
    </PeopleContainer>
  )
}
