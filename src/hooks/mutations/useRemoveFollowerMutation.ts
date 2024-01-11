import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { fetchRemoveFollower } from 'services/user'

const useRemoveFollowerMutation = (username: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['remove-follower']

  const { mutate: removeFollower, ...rest } = useMutation({
    mutationKey,
    mutationFn: async () => {
      return await fetchRemoveFollower(username)
    }
    ,
    onSuccess: () => {
      toast.success('Follower added', {
        id: 'remove-follower',
        position: 'bottom-right'
      })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { removeFollower, ...rest }
}

export { useRemoveFollowerMutation }
