import { Navigate, Outlet } from 'react-router-dom'

import { useStore } from 'store/useStore'

export const PrivateRoutes = () => {
  const { user } = useStore()

  return user === undefined || user === null ? (
    <Navigate to='/login' />
  ) : (
    <Outlet />
  )
}
