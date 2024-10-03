import Header from "../components/appComponents/Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default AppLayout
