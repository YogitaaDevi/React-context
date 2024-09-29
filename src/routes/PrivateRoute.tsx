import { useContext } from 'react'
import { AuthContextProvider } from '../pages/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

  const { isAuthenticated } = useContext(AuthContextProvider)
  
  return (
    <>
      {!isAuthenticated ? <Navigate to="login" replace /> : <Outlet />}
    </>
  )
}

export default PrivateRoute
