import {
  useColorModeValue,
  Avatar,
  Heading,
  Stack,
  Button,
  Box,
  Text,
  AvatarBadge
} from '@chakra-ui/react'

interface Props {}

export function CardPeople(props: Props): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      maxW={'320px'}
      p={6}
      rounded={'lg'}
      textAlign={'center'}
      w={'full'}
    >
      <Avatar
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: 'green.300',
          border: '2px solid white',
          rounded: 'full',
          pos: 'absolute',
          bottom: 0,
          right: 3
        }}
        mb={4}
        pos={'relative'}
        size={'xl'}
        src={
          'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
        }
      />
      <Heading fontFamily={'body'} fontSize={'2xl'}>
        Lindsey James
      </Heading>
      <Text color={'gray.500'} fontWeight={600} mb={4}>
        @lindsey_jam3s
      </Text>
      <Text
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}
        textAlign={'center'}
      >
        Actress, musician, songwriter and artist. PM for work inquires or
      </Text>

      <Stack direction={'row'} mt={8} spacing={4}>
        <Button
          isDisabled
          _focus={{
            bg: 'blue.500'
          }}
          _hover={{
            bg: 'blue.500'
          }}
          bg={'blue.400'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          color={'white'}
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
        >
          Follow
        </Button>
      </Stack>
    </Box>
  )
}
