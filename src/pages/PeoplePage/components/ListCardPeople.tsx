import { Box } from '@chakra-ui/react'

import { CardPeople } from './CardPeople'

interface Props {}

export function ListCardPeople(props: Props): JSX.Element {
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
      <CardPeople />
      <CardPeople />
      <CardPeople />
      <CardPeople />
    </Box>
  )
}
