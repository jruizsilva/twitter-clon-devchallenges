import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'
import { BsBookmark } from 'react-icons/bs'
import Swal from 'sweetalert2'
import {
  MdOutlineModeComment,
  MdLoop,
  MdFavoriteBorder,
  MdOutlineEdit,
  MdDelete
} from 'react-icons/md'
import { TbDots } from 'react-icons/tb'
import toast from 'react-hot-toast'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'

import {
  ButtonIconContainer,
  Comment,
  CommentInput,
  UserLogo
} from 'components/ui'
import { profileBackground } from 'assets'
import { usePost, type Post, type PostRequest } from 'business/posts/usePost'
import { useUser, type User } from 'business/user/useUser'
import { usePostsStore } from 'business/posts/usePostStore'

interface Props {
  urlImage?: string
  post: Post
  author: User | null
}

export function TweetCard({ urlImage, post, author }: Readonly<Props>) {
  const { fetchDeletePostById, fetchEditPost } = usePost()
  const { fetchToggleUserLikeByPostId } = useUser()
  const { deletePostById, updatePostById } = usePostsStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoadingLike, setIsLoadingLike] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setValue
  } = useForm<PostRequest>({
    mode: 'onBlur',
    defaultValues: { content: post?.content }
  })

  const handleDelete = (postId: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetchDeletePostById(postId.toString())
          .then(() => {
            deletePostById(postId)
            toast.success('Post deleted')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
  }

  const onSubmit: SubmitHandler<PostRequest> = async (
    postRequest: PostRequest
  ) => {
    try {
      const postUpdated = await fetchEditPost(post.id.toString(), postRequest)

      console.log(postUpdated)

      updatePostById(post.id, postUpdated)

      setValue('content', postUpdated.content)
    } catch (err) {
      console.error(err)
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  const toggleUserLikeByPostId = (postId: string) => {
    setIsLoadingLike(true)
    fetchToggleUserLikeByPostId(postId)
      .then((userUpdated: User) => {
        setIsLoadingLike(false)
        console.log(userUpdated)
      })
      .catch((err) => {
        setIsLoadingLike(false)
        console.log(err)
      })
  }

  return (
    <>
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
                <MenuItem
                  icon={<MdOutlineEdit fontSize={'16px'} />}
                  onClick={() => {
                    onOpen()
                  }}
                >
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
            <Text fontSize='xs'>{Object.keys(post.usersLikes)} Likes</Text>
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
            <ButtonIconContainer
              colorScheme='red'
              isDisabled={isLoadingLike}
              onClick={() => {
                toggleUserLikeByPostId(post.id.toString())
              }}
            >
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as={'form'} onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl
              isRequired
              id='content'
              isInvalid={Boolean(errors.content)}
            >
              <FormLabel>Content</FormLabel>
              <Textarea
                placeholder='What’s happening?'
                resize='vertical'
                {...register('content', {
                  required: {
                    value: true,
                    message: 'el tweet no debe estar vacio'
                  },
                  minLength: {
                    value: 4,
                    message: 'el tweet debe tener 4 o mas caracteres'
                  }
                })}
              />
              <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              isDisabled={!isValid}
              isLoading={isSubmitting}
              mr={3}
              type='submit'
            >
              Save
            </Button>
            <Button
              onClick={() => {
                setValue('content', post.content)
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
