import { Navigate, Outlet } from 'react-router-dom'

import { useUserQuery } from 'hooks/useUserQuery'

export const PrivateRoutes = () => {
  const { user } = useUserQuery()

  return user !== null ? <Outlet /> : <Navigate to='/login' />
}
