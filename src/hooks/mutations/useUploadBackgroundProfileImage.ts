import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { fetchUploadBackgroundProfileImage } from 'services/upload'

export const useUploadBackgroundProfileImage = (username: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['upload-background-image']

  const { mutate, ...rest } = useMutation({
    mutationKey,
    mutationFn: async (formData: FormData) => {
      return await fetchUploadBackgroundProfileImage(formData)
    },
    onSuccess: () => {
      toast.success('Background image uploaded successfuly', {
        id: 'upload-background-image',
        position: 'bottom-right'
      })
      queryClient.invalidateQueries({ queryKey: [`profile/${username}`] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { uploadBackgroundProfileImage: mutate, ...rest }
}

