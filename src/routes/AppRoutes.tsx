import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LoginForm from '../pages/LoginForm'
import AppLayout from '../layouts/AppLayout'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/login' element={<LoginForm />} />
        <Route index element={<Navigate to="/login" replace />} />
        <Route element={<AppLayout />}>
          <Route path='/home' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
