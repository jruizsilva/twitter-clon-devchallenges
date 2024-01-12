import { Box, FormControl, Input } from '@chakra-ui/react'

import { UserLogo } from './UserLogo'

interface Props {
  user: User
}

export function CommentInput({ user }: Props) {
  return (
    <Box height='60px' padding='10px 0'>
      <Box alignItems='center' columnGap={4} display='flex' height='40px'>
        <UserLogo imageSize='40' user={user} />
        <FormControl height='100%'>
          <Input
            fontSize='14px'
            placeholder='Add a comment...'
            variant='filled'
          />
        </FormControl>
      </Box>
    </Box>
  )
}
