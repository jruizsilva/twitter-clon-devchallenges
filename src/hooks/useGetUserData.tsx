import toast from 'react-hot-toast'

import { userService } from 'services/userService'
import { useAuthStore } from 'store'

export function useLoadUserData() {
  const { setUser } = useAuthStore()
  const { getUserData } = userService()

  return {
    loadUserData: async () => {
      try {
        const user = await getUserData()

        if (user !== null && user !== undefined) {
          setUser(user)
          toast.success('Successfully login')
        }

        return { user }
      } catch (err) {
        localStorage.removeItem('AUTH_TOKEN')
        console.log(err)
      }
    }
  }
}
