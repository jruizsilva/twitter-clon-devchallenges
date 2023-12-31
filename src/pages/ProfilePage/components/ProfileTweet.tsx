import {
  Box,
  Divider,
  Heading,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react'
import { BsBookmark } from 'react-icons/bs'
import {
  MdOutlineModeComment,
  MdLoop,
  MdFavoriteBorder,
  MdOutlineEdit,
  MdDelete
} from 'react-icons/md'
import { TbDots } from 'react-icons/tb'

import { ButtonIconContainer, UserLogo } from 'components/ui'
import { profileBackground } from 'assets'
import { type Post } from 'business/posts/usePost'
import { type User } from 'business/user/useUser'

interface Props {
  urlImage?: string
  post: Post
  author: User | null
}

export function ProfileTweet({ urlImage, post, author }: Readonly<Props>) {
  return (
    <Box
      backgroundColor='gray.700'
      borderRadius='8px'
      padding='16px'
      position={'relative'}
    >
      <Box display='flex' gap={3} marginBottom={4}>
        <UserLogo imageSize='40' />
        <Box display='flex' flexDirection='column' flexGrow={1} rowGap={1}>
          <Heading size='sm'>{author?.name}</Heading>
          <Text fontSize='xs'>{post.createdAt}</Text>
        </Box>
        <Box position={'absolute'} right={'8px'} top={'8px'}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<TbDots fontSize={'20px'} />}
              rounded={'full'}
              size={'sm'}
              variant='ghost'
            />
            <MenuList>
              <MenuItem icon={<MdOutlineEdit fontSize={'16px'} />}>
                Edit post
              </MenuItem>
              <MenuItem icon={<MdDelete fontSize={'16px'} />}>
                Delete post
              </MenuItem>
            </MenuList>
          </Menu>
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
        <Box
          display='flex'
          gap={4}
          justifyContent='end'
          marginBottom={2}
          marginTop={3}
        >
          <Text fontSize='xs'>0 Comments</Text>
          <Text fontSize='xs'>0 Retweets</Text>
          <Text fontSize='xs'>0 Likes</Text>
          <Text fontSize='xs'>0 Saved</Text>
        </Box>
        <Divider opacity={0.1} />
        <Box
          alignItems='center'
          columnGap='10px'
          display='flex'
          height='50px'
          justifyContent='center'
        >
          <ButtonIconContainer isDisabled>
            <Icon as={MdOutlineModeComment} boxSize={5} />
          </ButtonIconContainer>
          <ButtonIconContainer isActive isDisabled colorScheme='green'>
            <Icon as={MdLoop} boxSize={5} />
          </ButtonIconContainer>
          <ButtonIconContainer isDisabled colorScheme='red'>
            <Icon as={MdFavoriteBorder} boxSize={5} />
          </ButtonIconContainer>
          <ButtonIconContainer isDisabled colorScheme='cyan'>
            <Icon as={BsBookmark} boxSize={5} />
          </ButtonIconContainer>
        </Box>
      </Box>
      <Divider opacity={0.1} />
      {/* {true && <CommentInput />}
      <Divider opacity={0.1} />
      <Comment />
      <Comment /> */}
    </Box>
  )
}
