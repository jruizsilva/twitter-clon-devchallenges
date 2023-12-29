import { Box, Divider, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { MdFavoriteBorder, MdLoop, MdOutlineModeComment } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'

import {
  ButtonIconContainer,
  Comment,
  CommentInput,
  UserLogo
} from 'components/ui'
import { profileBackground } from 'assets'
import { type Post } from 'business/posts/usePost'

interface Props {
  urlImage?: string
  post: Post
}

export function ProfileTweet({ urlImage, post }: Readonly<Props>) {
  return (
    <Box backgroundColor='gray.700' borderRadius='8px' padding='16px'>
      <Box display='flex' gap={3} marginBottom={4}>
        <UserLogo imageSize='40' />
        <Box display='flex' flexDirection='column' rowGap={1}>
          <Heading size='sm'>{post.author.name}</Heading>
          <Text fontSize='xs'>{post.createdAt}</Text>
        </Box>
      </Box>
      <Box>
        <Text marginBottom='8px'>{post.content}</Text>
        {urlImage !== undefined && urlImage.length > 0 && (
          <Image
            borderRadius='8px'
            height='193px'
            objectFit='cover'
            src={profileBackground}
            width='100%'
          />
        )}
        {/* TODO agregar seccion comentarios */}
        {/* <Box
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
        </Box> */}
      </Box>
      {/* <Divider opacity={0.1} />
      {true && <CommentInput />}
      <Divider opacity={0.1} />
      <Comment />
      <Comment /> */}
    </Box>
  )
}
