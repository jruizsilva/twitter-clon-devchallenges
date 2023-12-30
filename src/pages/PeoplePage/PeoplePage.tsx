import { useEffect, useState } from 'react'
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import toast from 'react-hot-toast'

import { ListCardPeople, PeopleContainer } from './components'

import { useUser } from 'business/user/useUser'
import { useUserStore } from 'business/user/useUserStore'

interface Props {}

export function PeoplePage(props: Props): JSX.Element {
  const [peapleToSeach, setPeapleToSeach] = useState('')
  const { fetchAllUsers } = useUser()
  const { users, setUsers } = useUserStore()
  const handleClick = () => {
    setPeapleToSeach('test')
  }

  useEffect(() => {
    fetchAllUsers()
      .then((users) => {
        setUsers(users)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])

  return (
    <PeopleContainer>
      <InputGroup maxWidth={'664px'} mx={'auto'} size='lg'>
        <Input placeholder='Search people' pr='4.5rem' />
        <InputRightElement mr={'4px'} width='80px'>
          <Button onClick={handleClick}>Search</Button>
        </InputRightElement>
      </InputGroup>
      <ListCardPeople users={users} />
    </PeopleContainer>
  )
}
