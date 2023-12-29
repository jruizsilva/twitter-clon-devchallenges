import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from 'business/auth/useAuthStore'

export const PrivateRoutes = () => {
  const { user } = useAuthStore()

  return user !== null ? <Outlet /> : <Navigate to='/login' />
}
