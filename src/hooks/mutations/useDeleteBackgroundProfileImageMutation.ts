import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { fetchDeleteBackgroundProfileImage } from 'services/upload'

export const useDeleteBackgroundProfileImageMutation = (username: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['delete-bg-image-uploaded']

  const { mutate, ...rest } = useMutation({
    mutationKey,
    mutationFn: async () => {
      return await fetchDeleteBackgroundProfileImage()
    }
    ,
    onSuccess: () => {
      toast.success('Background image deleted successfuly', {
        id: 'delete-bg-image-uploaded',
        position: 'bottom-right'
      })
      queryClient.invalidateQueries({ queryKey: [`profile/${username}`] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { deleteBackgroundProfileImage: mutate, ...rest }
}
