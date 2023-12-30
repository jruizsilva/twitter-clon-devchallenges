import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Text,
  Textarea
} from '@chakra-ui/react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { UserLogo } from 'components/ui'
import { type Post, usePost } from 'business/posts/usePost'
import { usePostsStore } from 'business/posts/usePostsStore'

interface Props {}

export function CreatePost(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset
  } = useForm<Post>({ mode: 'onBlur' })
  const { fetchCreateOnePost } = usePost()
  const { addPost } = usePostsStore()

  const onSubmit: SubmitHandler<Post> = async (post: Post) => {
    try {
      const postCreated = await fetchCreateOnePost(post)

      addPost(postCreated)

      reset()
    } catch (err) {
      console.error(err)
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  return (
    <Box
      as='form'
      backgroundColor='gray.700'
      borderRadius='12px'
      minHeight='155px'
      paddingX='20px'
      paddingY='12px'
      width='100%'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text fontWeight='bold' paddingBottom='8px'>
        Tweet something
      </Text>
      <Divider marginBottom='8px' />
      <Box marginBottom='16px' position='relative'>
        <UserLogo imageSize='40' left='8px' position='absolute' top='8px' />
        <FormControl
          isRequired
          id='content'
          isInvalid={Boolean(errors.content)}
        >
          <Textarea
            paddingLeft='58px'
            placeholder='What’s happening?'
            resize='vertical'
            variant='unstyled'
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
      </Box>
      <Box display='flex' justifyContent='end'>
        {/* <Button size='md' variant='ghost'>
            <Icon as={LuImage} boxSize={5} />
          </Button> */}
        {/* <Button leftIcon={<BsGlobeAmericas />} variant='ghost'>
            Everyone can reply
          </Button> */}
        <Button isDisabled={!isValid} isLoading={isSubmitting} type='submit'>
          Tweet
        </Button>
      </Box>
    </Box>
  )
}
