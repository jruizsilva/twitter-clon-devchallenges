import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ProfilePage, HomePage, LoginPage, RegisterPage } from 'pages'
import { MainLayout } from 'components/layouts/MainLayout'

interface Props {}

export function MainRouter(props: Props) {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route element={<HomePage />} path='/home' />
            <Route element={<ProfilePage />} path='/profile/:userId' />
            <Route element={<LoginPage />} path='/login' />
            <Route element={<RegisterPage />} path='/register' />
            <Route element={<Navigate replace to='/home' />} path='*' />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}
