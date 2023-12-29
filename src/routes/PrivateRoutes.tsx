import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from 'store'

export const PrivateRoutes = () => {
  const { user } = useAuthStore()

  return user !== null ? <Outlet /> : <Navigate to='/login' />
}
