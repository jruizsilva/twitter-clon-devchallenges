import { Box, Divider, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { MdFavoriteBorder, MdLoop, MdOutlineModeComment } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'

import { ButtonIconContainer, Comment, CommentInput } from 'components/ui'
import { profileBackground } from 'assets'

interface Props {}

export function ProfileTweet(props: Props) {
  return (
    <>
      <Box backgroundColor='gray.700' borderRadius='8px' padding='16px'>
        <Box display='flex' gap={3} marginBottom={4}>
          <Image
            alt='profile photo'
            borderRadius='8px'
            height='40px'
            src='https://i.pravatar.cc/40'
            width='40px'
          />
          <Box display='flex' flexDirection='column' rowGap={1}>
            <Heading size='sm'>Peyton Lyons</Heading>
            <Text fontSize='xs'>24 August at 20:43 </Text>
          </Box>
        </Box>
        <Box>
          <Text marginBottom='8px'>
            Traveling – it leaves you speechless, then turns you into a
            storyteller.
          </Text>
          <Image
            borderRadius='8px'
            height='193px'
            objectFit='cover'
            src={profileBackground}
            width='100%'
          />
          <Box
            display='flex'
            gap={4}
            justifyContent='end'
            marginBottom={2}
            marginTop={3}
          >
            <Text fontSize='xs'>449 Comments</Text>
            <Text fontSize='xs'>59k Retweets</Text>
            <Text fontSize='xs'>234 Saved</Text>
          </Box>
          <Divider opacity={0.1} />
          <Box
            alignItems='center'
            columnGap='10px'
            display='flex'
            height='50px'
            justifyContent='center'
          >
            <ButtonIconContainer>
              <Icon as={MdOutlineModeComment} boxSize={5} />
            </ButtonIconContainer>
            <ButtonIconContainer isActive>
              <Icon as={MdLoop} boxSize={5} />
            </ButtonIconContainer>
            <ButtonIconContainer>
              <Icon as={MdFavoriteBorder} boxSize={5} />
            </ButtonIconContainer>
            <ButtonIconContainer>
              <Icon as={BsBookmark} boxSize={5} />
            </ButtonIconContainer>
          </Box>
        </Box>
        <Divider opacity={0.1} />
        {true && <CommentInput />}
        <Divider opacity={0.1} />
        <Comment />
        <Comment />
      </Box>
    </>
  )
}
