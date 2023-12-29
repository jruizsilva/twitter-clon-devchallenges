
import toast from 'react-hot-toast'

import { useUser } from 'business/user/useUser'
import { useAuthStore } from 'business/auth/useAuthStore'

export function useLoadUserData() {
  const { setUser } = useAuthStore()
  const { getUserData } = useUser()

  return {
    loadUserData: async () => {
      try {
        const user = await getUserData()

        if (user !== null && user !== undefined) {
          setUser(user)
          toast.success('Successfully login!')
        }

        return { user }
      } catch (err) {
        localStorage.removeItem('AUTH_TOKEN')
        console.log(err)
      }
    }
  }
}
