import { Box, FormControl, Image, Input } from '@chakra-ui/react'

interface Props {}

export function CommentInput(props: Props) {
  return (
    <>
      <Box height='60px' padding='10px 0'>
        <Box alignItems='center' columnGap={4} display='flex' height='40px'>
          <Image
            borderRadius='8px'
            height='100%'
            src={`https://i.pravatar.cc/40`}
            width='40px'
          />
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
