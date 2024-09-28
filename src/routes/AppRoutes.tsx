import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Header from '../components/appComponents/Header'
import LoginForm from '../pages/LoginForm'
const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route element= {<MainLayout />}>
        {/* <Route index element = {<LoginForm/>} /> */}
        <Route index element= {<Header/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default AppRoutes
