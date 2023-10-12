import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { MainLayout } from 'components/layouts/MainLayout'
import {
  HomePage,
  LoginPage,
  ProfileEditPage,
  ProfilePage,
  RegisterPage
} from 'pages'

interface Props {}

export function MainRouter(props: Props) {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route element={<HomePage />} path='/home' />
            <Route element={<ProfilePage />} path='/profile/:userId' />
            <Route element={<ProfileEditPage />} path='/profile/edit/:userId' />
            <Route element={<LoginPage />} path='/login' />
            <Route element={<RegisterPage />} path='/register' />
            <Route element={<Navigate replace to='/home' />} path='*' />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}
