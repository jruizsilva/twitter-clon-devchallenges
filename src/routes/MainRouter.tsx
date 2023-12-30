import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { PrivateRoutes } from './PrivateRoutes'
import { RedirectToHomeWhenUserLogin } from './RedirectToHomeWhenUserLogin'

import { MainLayout } from 'components/layouts/MainLayout'
import {
  HomePage,
  LoginPage,
  ProfileEditPage,
  ProfilePage,
  RegisterPage
} from 'pages'
import { PeoplePage } from 'pages/PeoplePage/PeoplePage'

interface Props {}

export function MainRouter(props: Props) {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<ProfilePage />} path='/profile' />
            <Route element={<ProfileEditPage />} path='/profile/edit' />
            <Route element={<PeoplePage />} path='/people' />
          </Route>
          <Route element={<RedirectToHomeWhenUserLogin />}>
            <Route element={<LoginPage />} path='/login' />
            <Route element={<RegisterPage />} path='/register' />
          </Route>
          <Route element={<HomePage />} path='/home' />

          <Route element={<Navigate replace to='/home' />} path='*' />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
