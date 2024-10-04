import { useContext } from "react"
import { AuthContextProvider } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import { LOGIN } from "../constants/constants"

const PrivateRoute = () => {

  const { isAuthenticated } = useContext(AuthContextProvider)

  return (
    <>
    {!isAuthenticated ? <Navigate to={LOGIN} replace /> : <Outlet />}
    </>
  )
}

export default PrivateRoute
