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
import { BookmarksPage } from 'pages/BookmarksPage/BookmarksPage'

interface Props {}

export function MainRouter(props: Props) {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<ProfilePage />} path='/profile/:username' />
            <Route element={<ProfileEditPage />} path='/profile/edit' />
            <Route element={<PeoplePage />} path='/people' />
            <Route element={<BookmarksPage />} path='/bookmarks' />
            <Route element={<HomePage />} path='/' />
          </Route>
          <Route element={<RedirectToHomeWhenUserLogin />}>
            <Route element={<LoginPage />} path='/login' />
            <Route element={<RegisterPage />} path='/register' />
          </Route>

          <Route element={<Navigate replace to='/' />} path='*' />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
