import { createContext, useState } from "react"
interface AuthContextProps {
  children: any
}

const AuthContextValue = {
  isAuthenticated: false,
  userName: "",
  handleLogin: (name: string) => { },
  handleLogout: () => { }
}

export const AuthContextProvider = createContext(AuthContextValue)

const AuthContext = ({ children }: AuthContextProps) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  
  const handleLogin = (name:string) => {
    setIsAuthenticated(true)
    setUserName(name)
  }
  const handleLogout = () => {
    setIsAuthenticated(false)
  }
  return (
    <AuthContextProvider.Provider value={{ isAuthenticated, handleLogin, handleLogout, userName }}>
      {children}
    </AuthContextProvider.Provider>
  )
}

export default AuthContext
