import { useContext, useMemo } from "react"
import { AuthContextProvider } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {

  const { isAuthenticated } = useContext(AuthContextProvider)

  const handleAuthentication = useMemo(() => (
    !isAuthenticated ? <Navigate to="login" replace /> : <Outlet />
  ), [isAuthenticated])
  return (
    <>
      {handleAuthentication}
    </>
  )
}

export default PrivateRoute
