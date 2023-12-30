import { useState } from 'react'
import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'

import { ListCardPeople, PeopleContainer } from './components'

interface Props {}

export function PeoplePage(props: Props): JSX.Element {
  const [peapleToSeach, setPeapleToSeach] = useState('')
  const handleClick = () => {
    setPeapleToSeach('test')
  }

  return (
    <PeopleContainer>
      <InputGroup mx={'auto'} size='lg' width={'664px'}>
        <Input placeholder='Search people' pr='4.5rem' />
        <InputRightElement mr={'4px'} width='80px'>
          <Button onClick={handleClick}>Search</Button>
        </InputRightElement>
      </InputGroup>
      <ListCardPeople />
    </PeopleContainer>
  )
}
