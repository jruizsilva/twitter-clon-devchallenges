import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  type BoxProps,
  Box
} from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useCallback } from 'react'

import { useDeleteCommentMutation } from 'hooks/mutations/useDeleteCommentMutation'

interface Props {
  post: Post
  comment: IComment
}

export function CommentMenuOptions({
  post,
  comment,
  ...rest
}: Readonly<BoxProps & Props>) {
  const { deleteComment, isPending: isPendingDeleteComment } =
    useDeleteCommentMutation()

  const handleDeleteComment = useCallback(() => {
    const deleteCommentRequest: DeleteCommentRequest = {
      commentId: comment.id.toString(),
      postId: post.id.toString()
    }

    deleteComment(deleteCommentRequest)
  }, [post, comment, deleteComment])

  return (
    <Box {...rest}>
      <Popover isLazy placement='bottom'>
        <PopoverTrigger>
          <IconButton
            aria-label='More server options'
            icon={<BsThreeDotsVertical />}
            size='xs'
            variant='solid'
            w='fit-content'
          />
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadow: 'none' }} w='fit-content'>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                colorScheme='orange'
                fontSize='sm'
                fontWeight='normal'
                justifyContent='space-between'
                rightIcon={<MdEdit />}
                variant='ghost'
                w='194px'
              >
                Edit comment
              </Button>
              <Button
                colorScheme='red'
                fontSize='sm'
                fontWeight='normal'
                isDisabled={isPendingDeleteComment}
                isLoading={isPendingDeleteComment}
                justifyContent='space-between'
                rightIcon={<MdDelete />}
                variant='ghost'
                w='194px'
                onClick={handleDeleteComment}
              >
                Remove comment
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
}
