import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from 'business/auth/useAuthStore'

export const RedirectToHomeWhenUserLogin = () => {
  const { user } = useAuthStore()

  return user !== null ? <Navigate to='/' /> : <Outlet />
}
