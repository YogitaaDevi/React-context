import { createContext, useState } from "react"
interface AuthContextProps{
    children: any
}

const AuthContextValue = {
    isAuthenticated: false,
    handleLogin: () => {},
    handleLogout: () => {}
}

export const AuthContextProvider = createContext(AuthContextValue)

const AuthContext = ({children}: AuthContextProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const handleLogin = () => {
        setIsAuthenticated(true)
    }
    const handleLogout = () => {
        setIsAuthenticated(false)
    }
  return (
    <AuthContextProvider.Provider value={{isAuthenticated, handleLogin, handleLogout}}>
        {children}
    </AuthContextProvider.Provider>
  )
}

export default AuthContext
