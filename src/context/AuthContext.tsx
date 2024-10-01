import { createContext, useState } from "react"
import { UserType } from "../types/UserType"
interface AuthContextProps {
  children: any
}

const AuthContextValue = {
  isAuthenticated: false,
  user: { id: 0, name: "", password: "", contact: 0, location: "", image: "" },
  handleLogin: (user: UserType) => { },
  handleLogout: () => { }
}

export const AuthContextProvider = createContext(AuthContextValue)

const AuthContext = ({ children }: AuthContextProps) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserType>({ id: 0, name: "", password: "", contact: 0, location: "", image: ""});

  const handleLogin = (user: UserType) => {
    setIsAuthenticated(true)
    setUser(user)
  }
  const handleLogout = () => {
    setIsAuthenticated(false)
  }
  return (
    <AuthContextProvider.Provider value={{ isAuthenticated, handleLogin, handleLogout, user }}>
      {children}
    </AuthContextProvider.Provider>
  )
}

export default AuthContext
