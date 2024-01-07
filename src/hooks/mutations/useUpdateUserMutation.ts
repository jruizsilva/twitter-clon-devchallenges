import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchUpdateUser } from 'services/user';


const useUpdateUserMutation = () => {
  const queryClient = useQueryClient()
  const mutationKey = ['edit-user']
  const mutationFn = fetchUpdateUser

  const { mutate: updateUser, ...rest } = useMutation({
    mutationKey, mutationFn, onSuccess: () => {
      toast.success('User updated successfully', {
        id: 'edit-user',
        position: 'bottom-right'
      })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    }
    , onError: (error) => {
      console.dir(error)
    },

  })

  return { updateUser, ...rest }
}

export { useUpdateUserMutation }