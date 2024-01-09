import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { fetchRegister } from 'services/auth'

const useRegisterMutation = () => {
  const queryClient = useQueryClient()
  const mutationKey = ['register']
  const mutationFn = fetchRegister

  const { mutate: registerUser, ...rest } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (token) => {
      toast.success('Register successfuly', {
        id: 'register',
        position: 'bottom-right'
      })
      localStorage.setItem('AUTH_TOKEN', token)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { registerUser, ...rest }
}

export { useRegisterMutation }
