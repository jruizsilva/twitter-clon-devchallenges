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
import toast from 'react-hot-toast'

import {
  ButtonIconContainer,
  Comment,
  CommentInput,
  UserLogo
} from 'components/ui'
import { profileBackground } from 'assets'
import { usePost, type Post } from 'business/posts/usePost'
import { type User } from 'business/user/useUser'
import { usePostsStore } from 'business/posts/usePostStore'

interface Props {
  urlImage?: string
  post: Post
  author: User | null
}

export function TweetCard({ urlImage, post, author }: Readonly<Props>) {
  const { fetchDeletePostById } = usePost()
  const { deletePostById } = usePostsStore()
  const handleDelete = (postId: number) => {
    console.log('handleDelete')
    fetchDeletePostById(postId.toString())
      .then(() => {
        deletePostById(postId)
        toast.success('Post deleted')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Box backgroundColor='gray.700' borderRadius='8px' padding='16px'>
      <Box display='flex' gap={3} marginBottom={4}>
        <UserLogo imageSize='40' />
        <Box display='flex' flexDirection='column' flexGrow={1} rowGap={1}>
          <Heading size='sm'>{author?.name}</Heading>
          <Text fontSize='xs'>{post.createdAt}</Text>
        </Box>
        <Box mr={'-8px'} mt={'-8px'}>
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
              <MenuItem
                icon={<MdDelete fontSize={'16px'} />}
                onClick={() => {
                  handleDelete(post.id)
                }}
              >
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
