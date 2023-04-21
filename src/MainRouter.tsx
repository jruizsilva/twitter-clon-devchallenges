import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ProfilePage } from './pages/ProfilePage'

import { HomePage } from 'pages'
import { MainLayout } from 'components/layouts/MainLayout'

interface Props {}

export function MainRouter(props: Props) {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route element={<HomePage />} path='/' />
            <Route element={<ProfilePage />} path='/profile/:userId' />
            <Route element={<Navigate replace to='/' />} path='*' />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}
