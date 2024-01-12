import { Navigate, Outlet } from 'react-router-dom'

import { useStore } from 'store/useStore'

export const PrivateRoutes = () => {
  const { userAuthenticated } = useStore()

  return userAuthenticated === undefined || userAuthenticated === null ? (
    <Navigate to='/login' />
  ) : (
    <Outlet />
  )
}
