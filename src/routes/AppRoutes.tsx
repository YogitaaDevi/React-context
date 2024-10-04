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
import {LOGIN, HOME, USER, USERORDER, USERPROFILE, PAYMENT, CART, PRODUCT} from "../constants/constants"

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route index element={<Navigate to={LOGIN} replace />} />
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route path={HOME} element={<HomePage />} />
            <Route path={PRODUCT} element={<ProductDisplayPage />} />
            <Route path={CART} element={<CartPage />} />
            <Route path={USER} element={<UserPage/>}/>
            <Route path={USERPROFILE} element={<ProfilePage/>}/>
            <Route path={USERORDER} element={<OrderPage />} />
            <Route path={PAYMENT} element={<PaymentSuccessPage/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
