import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { fetchAddFollower } from 'services/user'

const useAddFollowerMutation = (username: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['add-follower']

  const { mutate: addFollower, ...rest } = useMutation({
    mutationKey,
    mutationFn: async () => {
      return await fetchAddFollower(username)
    }
    ,
    onSuccess: () => {
      toast.success('Follower added', {
        id: 'add-follower',
        position: 'bottom-right'
      })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { addFollower, ...rest }
}

export { useAddFollowerMutation }
