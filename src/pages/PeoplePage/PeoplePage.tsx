import { useEffect } from 'react'
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  Box
} from '@chakra-ui/react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { ListCardPeople, PeopleContainer } from './components'

import { useUser } from 'business/user/useUser'
import { useUserStore } from 'business/user/useUserStore'

interface Props {}

interface FormValues {
  peapleToSearch: string
}

export function PeoplePage(props: Props): JSX.Element {
  const { fetchAllUsers } = useUser()
  const { users, setUsers } = useUserStore()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    getValues
  } = useForm<FormValues>({ mode: 'onBlur' })

  useEffect(() => {
    fetchAllUsers()
      .then((users) => {
        setUsers(users)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])
  const onSubmit: SubmitHandler<FormValues> = async (formValues) => {
    console.log(formValues)
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
                isDisabled={!isValid || getValues().peapleToSearch?.length < 2}
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
      <ListCardPeople users={users} />
    </PeopleContainer>
  )
}
