import { createContext, useState, useCallback, useMemo, ReactNode } from "react";
import { UserType } from "../types/UserType";

interface AuthContextProps {
  children: ReactNode;
}

const AuthContextValue = {
  isAuthenticated: false,
  user: { id: 0, mail: "", name: "", password: "", contact: 0, location: "", image: "" },
  handleLogin: (user: UserType) => { },
  handleLogout: () => { },
};

export const AuthContextProvider = createContext(AuthContextValue);

const AuthContext = ({ children }: AuthContextProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserType>({ id: 0, mail: "", name: "", password: "", contact: 0, location: "", image: "" });

  const handleLogin = (user: UserType) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({ id: 0, mail: "", name: "", password: "", contact: 0, location: "", image: "" });
  };

  const authContextValue = useMemo(() => ({
    isAuthenticated, user, handleLogin, handleLogout
  }), [isAuthenticated, user, handleLogin, handleLogout]);

  return (
    <AuthContextProvider.Provider value={authContextValue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
