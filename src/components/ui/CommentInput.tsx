import { Box, FormControl, Input } from '@chakra-ui/react'

import { UserLogo } from './UserLogo'

interface Props {}

export function CommentInput(props: Props) {
  return (
    <>
      <Box height='60px' padding='10px 0'>
        <Box alignItems='center' columnGap={4} display='flex' height='40px'>
          <UserLogo imageSize='40' />
          <FormControl height='100%'>
            <Input
              fontSize='14px'
              placeholder='Add a comment...'
              variant='filled'
            />
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
