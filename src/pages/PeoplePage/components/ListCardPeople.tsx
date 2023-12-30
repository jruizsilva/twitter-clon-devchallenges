import { Box } from '@chakra-ui/react'

import { CardPeople } from './CardPeople'

import { type User } from 'business/user/useUser'

interface Props {
  users: User[] | null
}

export function ListCardPeople({ users }: Props): JSX.Element {
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      gap={'24px'}
      justifyContent={{ base: 'center' }}
      mx={'auto'}
      pt='48px'
      width={'100%'}
    >
      {users !== null &&
        users.length > 0 &&
        users.map((user) => <CardPeople key={user.id} user={user} />)}
    </Box>
  )
}
