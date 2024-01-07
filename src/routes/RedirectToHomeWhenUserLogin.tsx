import { Navigate, Outlet } from 'react-router-dom'

import { useUserQuery } from 'hooks/useUserQuery'

export const RedirectToHomeWhenUserLogin = () => {
  const { user } = useUserQuery()

  return user !== null ? <Navigate to='/' /> : <Outlet />
}
