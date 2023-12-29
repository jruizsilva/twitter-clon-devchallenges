import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from 'business/auth/useAuthStore'

export const RedirectWhenUserLogin = () => {
  const { user } = useAuthStore()

  return user !== null ? <Navigate to='/home' /> : <Outlet />
}
