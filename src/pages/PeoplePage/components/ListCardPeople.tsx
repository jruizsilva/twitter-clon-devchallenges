import { Box, Center } from '@chakra-ui/react'

import { CardPeople } from './CardPeople'

interface Props {
  users: User[] | undefined
}

export function ListCardPeople({ users }: Readonly<Props>): JSX.Element {
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
      {users?.length === 0 && <Center>No se encontraron resultados</Center>}
      {users !== undefined &&
        users.length > 0 &&
        users.map((user) => <CardPeople key={user.id} user={user} />)}
    </Box>
  )
}
