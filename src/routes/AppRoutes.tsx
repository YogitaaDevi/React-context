import { Navigate, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import AppLayout from "../layouts/AppLayout"
import PrivateRoute from "./PrivateRoute"
import DashboardPage from "../pages/DashboardPage"
import {LOGIN, DASHBOARD, EMPLOYEE } from "../utils/constants"
import MainLayout from "../layouts/MainLayout"
import EmployeeDisplayPage from "../pages/EmployeeDisplayPage"

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route index element={<Navigate to={LOGIN} replace />} />
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
             <Route path={DASHBOARD} element={<DashboardPage />} />
             <Route path={EMPLOYEE} element={<EmployeeDisplayPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
