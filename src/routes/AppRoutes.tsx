import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoginForm from '../pages/LoginForm'
import AppLayout from '../layouts/AppLayout'
import ProductDisplayPage from '../pages/ProductDisplayPage'
import CartPage from '../pages/CartPage'
import PrivateRoute from './PrivateRoute'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/login' element={<LoginForm />} />
        <Route index element={<Navigate to="/login" replace />} />
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/home/product' element={<ProductDisplayPage />} />
            <Route path='/home/cart' element={<CartPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
