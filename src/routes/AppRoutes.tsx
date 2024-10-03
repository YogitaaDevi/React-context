import { Navigate, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import LoginPage from "../pages/LoginPage"
import AppLayout from "../layouts/AppLayout"
import ProductDisplayPage from "../pages/ProductDisplayPage"
import CartPage from "../pages/CartPage"
import PrivateRoute from "./PrivateRoute"
import HomePage from "../pages/HomePage"
import UserPage from "../pages/UserPage"
import PaymentSuccessPage from "../pages/PaymentSuccessPage"
import OrderPage from "../pages/OrderPage"
import ProfilePage from "../pages/ProfilePage"

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route index element={<Navigate to="/login" replace />} />
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/product" element={<ProductDisplayPage />} />
            <Route path="/home/cart" element={<CartPage />} />
            <Route path="/home/user" element={<UserPage/>}/>
            <Route path="/home/user/profile" element={<ProfilePage/>}/>
            <Route path="/home/user/order" element={<OrderPage />} />
            <Route path="/home/payment" element={<PaymentSuccessPage/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
