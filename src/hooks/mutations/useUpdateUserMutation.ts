import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchUpdateUser } from 'services/user';


const useUpdateUserMutation = (username: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['edit-user']

  const mutationFn = async (updateUserRequest: UpdateUserRequest) => {
    return await fetchUpdateUser(username, updateUserRequest)
  }

  const onSuccess = () => {
    toast.success('User updated successfully', {
      id: 'edit-user',
      position: 'bottom-right'
    })
    queryClient.invalidateQueries({ queryKey: ['user'] })
  }


  const { mutate: updateUser, ...rest } = useMutation({
    mutationKey, mutationFn, onSuccess,
    onError: (error) => {
      console.dir(error)
    },

  })

  return { updateUser, ...rest }
}

export { useUpdateUserMutation }