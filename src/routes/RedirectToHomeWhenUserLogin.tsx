import { Navigate, Outlet } from 'react-router-dom'

import { useStore } from 'store/useStore'

export const RedirectToHomeWhenUserLogin = () => {
  const { userAuthenticated } = useStore()

  return userAuthenticated === undefined || userAuthenticated === null ? (
    <Outlet />
  ) : (
    <Navigate to='/' />
  )
}
