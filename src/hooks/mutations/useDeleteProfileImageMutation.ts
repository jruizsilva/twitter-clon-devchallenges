import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { fetchDeleteProfileImage } from 'services/upload'

const useDeleteProfileImageMutation = () => {
  const queryClient = useQueryClient()
  const mutationKey = ['delete-image-uploaded']

  const { mutate: deleteProfileImage, ...rest } = useMutation({
    mutationKey,
    mutationFn: async () => {
      return await fetchDeleteProfileImage()
    },
    onSuccess: () => {
      toast.success('Image deleted successfuly', {
        id: 'delete-image-uploaded',
        position: 'bottom-left'
      })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { deleteProfileImage, ...rest }
}

export { useDeleteProfileImageMutation }
