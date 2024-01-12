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
import { FaBookmark, FaRegBookmark, FaHeart, FaRegHeart } from 'react-icons/fa'
import Swal from 'sweetalert2'
import {
  MdOutlineModeComment,
  MdLoop,
  MdOutlineEdit,
  MdDelete
} from 'react-icons/md'
import { TbDots } from 'react-icons/tb'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { BsBookmarkXFill } from 'react-icons/bs'
import { IoMdHeartDislike } from 'react-icons/io'

import { ButtonIconContainer, UserLogo } from 'components/ui'
import { profileBackground } from 'assets'
import { useDeletePostMutation } from 'hooks/mutations/useDeletePostMutation'
import { useUpdatePostMutation } from 'hooks/mutations/useUpdatePostMutation'
import { useToggleLikeMutation } from 'hooks/mutations/useToggleLikeMutation'
import { useToggleBookmarkMutation } from 'hooks/mutations/useToggleBookmarkMutation'
import { useRemoveBookmarkMutation } from 'hooks/mutations/useRemoveBookmarkMutation'
import { useRemoveLikeMutation } from 'hooks/mutations/useRemoveLikeMutation'
import { useAppStore } from 'store/useAppStore'

interface Props {
  urlImage?: string
  post: Post
  showOptionsMenu?: boolean
  showButtons?: boolean
  showCrudButtons?: boolean
}

const verifyIfPostIsAlreadyLiked = (
  post: Post,
  userAuthenticated: User | undefined
) => {
  if (post?.likedByUsers?.length === 0) {
    return false
  }

  return post.likedByUsers?.some(
    (el) => el.username === userAuthenticated?.username
  )
}

const verifyIfPostIsAlreadySaved = (
  post: Post,
  userAuthenticated: User | undefined
) => {
  if (post?.savedByUsers?.length === 0) {
    return false
  }

  return post.savedByUsers?.some(
    (el) => el.username === userAuthenticated?.username
  )
}

export function TweetCard({
  urlImage,
  post,
  showOptionsMenu = false,
  showButtons = false,
  showCrudButtons = false
}: Readonly<Props>) {
  const { userAuthenticated } = useAppStore()
  const { pathname } = useLocation()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLiked, setIsLiked] = useState(
    verifyIfPostIsAlreadyLiked(post, userAuthenticated as User)
  )
  const [isPostSavedInBookmarks, setIsPostSavedInBookmarks] = useState(
    verifyIfPostIsAlreadySaved(post, userAuthenticated as User)
  )
  const { deletePost } = useDeletePostMutation()
  const { editPost, data } = useUpdatePostMutation()
  const { removeBookmark } = useRemoveBookmarkMutation(post?.id.toString())
  const { removeLike } = useRemoveLikeMutation(post?.id.toString())
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setValue
  } = useForm<PostRequest>({
    mode: 'onBlur',
    defaultValues: {
      content: data?.content != null ? data.content : post?.content
    }
  })
  const { toggleLike, isPending: isPendingLike } = useToggleLikeMutation(
    post?.id.toString()
  )
  const { toggleBookmark, isPending: isPendingBookmark } =
    useToggleBookmarkMutation(post?.id.toString())

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
        deletePost(postId.toString())
      }
    })
  }

  const handleEdit: SubmitHandler<PostRequest> = async (
    postRequest: PostRequest
  ) => {
    editPost({ postId: post.id.toString(), postRequest })
  }

  const handleLike = () => {
    toggleLike(isLiked)

    setIsLiked((prev) => !prev)
  }

  const handleBookmark = () => {
    toggleBookmark(isPostSavedInBookmarks)
    setIsPostSavedInBookmarks((prev) => !prev)
  }

  const pathContainsPostsLiked = useMemo(() => {
    return pathname.includes('postsLiked')
  }, [pathname])

  const handleRemoveBookmark = () => {
    removeBookmark()
  }
  const handleRemoveLike = () => {
    removeLike()
  }

  return (
    <>
      <Box backgroundColor='gray.700' borderRadius='8px' padding='16px'>
        <Box display='flex' gap={3} marginBottom={4}>
          <UserLogo imageSize='40' user={post?.user} />
          <Box display='flex' flexDirection='column' flexGrow={1} rowGap={1}>
            <Heading size='sm'>
              <Text
                _hover={{ textDecoration: 'underline' }}
                as={NavLink}
                to={`/profile/${post?.user?.username}/postsCreated`}
              >
                {post?.user?.name}
              </Text>
            </Heading>
            <Text fontSize='xs'>{post.createdAt}</Text>
          </Box>
          {showOptionsMenu && (
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
                  {pathname === '/bookmarks' && (
                    <MenuItem
                      icon={<BsBookmarkXFill fontSize={'16px'} />}
                      onClick={handleRemoveBookmark}
                    >
                      Remove bookmark
                    </MenuItem>
                  )}
                  {pathContainsPostsLiked && (
                    <MenuItem
                      icon={<IoMdHeartDislike fontSize={'16px'} />}
                      onClick={handleRemoveLike}
                    >
                      Remove like
                    </MenuItem>
                  )}

                  {showCrudButtons &&
                    post?.user?.id === userAuthenticated?.id && (
                      <>
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
                      </>
                    )}
                </MenuList>
              </Menu>
            </Box>
          )}
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
          {Boolean(userAuthenticated) && (
            <>
              <Box
                display='flex'
                gap={4}
                justifyContent='end'
                marginBottom={2}
                marginTop={3}
              >
                <Text fontSize='xs'>0 Comments</Text>
                <Text fontSize='xs'>0 Retweets</Text>
                <Text fontSize='xs'>{post.likedByUsers?.length} Likes</Text>
                <Text fontSize='xs'>{post?.savedByUsers?.length} Saved</Text>
              </Box>
              <Divider opacity={0.1} />
              {showButtons && (
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
                  <ButtonIconContainer isDisabled colorScheme='green'>
                    <Icon as={MdLoop} boxSize={5} />
                  </ButtonIconContainer>
                  <ButtonIconContainer
                    colorScheme='red'
                    isDisabled={isPendingLike}
                    onClick={() => {
                      handleLike()
                    }}
                  >
                    <Icon as={isLiked ? FaHeart : FaRegHeart} boxSize={5} />
                  </ButtonIconContainer>
                  <ButtonIconContainer
                    colorScheme='cyan'
                    isDisabled={isPendingBookmark}
                    onClick={() => {
                      handleBookmark()
                    }}
                  >
                    <Icon
                      as={isPostSavedInBookmarks ? FaBookmark : FaRegBookmark}
                      boxSize={5}
                    />
                  </ButtonIconContainer>
                </Box>
              )}
            </>
          )}
        </Box>
        {/* <Divider opacity={0.1} /> */}
        {/* {true && <CommentInput />}
      <Divider opacity={0.1} />
      <Comment />
      <Comment /> */}
      </Box>
      {showOptionsMenu && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent as={'form'} onSubmit={handleSubmit(handleEdit)}>
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
      )}
    </>
  )
}
