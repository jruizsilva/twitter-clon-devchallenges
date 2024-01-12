import { Navigate, Outlet } from 'react-router-dom'

import { useStore } from 'store/useStore'

export const RedirectToHomeWhenUserLogin = () => {
  const { user } = useStore()

  return user === undefined || user === null ? <Outlet /> : <Navigate to='/' />
}
