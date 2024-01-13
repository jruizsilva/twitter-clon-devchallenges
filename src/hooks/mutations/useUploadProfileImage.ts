import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { fetchUploadProfileImage } from 'services/upload'


const useUploadProfileImage = () => {
  const queryClient = useQueryClient()
  const mutationKey = ['upload-profile-image']

  const { mutate: uploadProfileImage, ...rest } = useMutation({
    mutationKey,
    mutationFn: async (formData: FormData) => {
      return await fetchUploadProfileImage(formData)
    },
    onSuccess: () => {
      toast.success('Image uploaded successfuly', {
        id: 'upload-profile-image',
        position: 'bottom-right'
      })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { uploadProfileImage, ...rest }
}

export { useUploadProfileImage }
