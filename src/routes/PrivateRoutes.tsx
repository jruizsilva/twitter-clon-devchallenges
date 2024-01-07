import { Navigate, Outlet } from 'react-router-dom'

import { useUserQuery } from 'hooks/queries/useUserQuery'

export const PrivateRoutes = () => {
  const { user } = useUserQuery()

  return user === undefined || user === null ? (
    <Navigate to='/login' />
  ) : (
    <Outlet />
  )
}
