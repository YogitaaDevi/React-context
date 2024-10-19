import { useContext } from "react";
import { AuthContextProvider } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../utils/constants";

const PrivateRoute = () => {
  const { currentAuthState } = useContext(AuthContextProvider);

  return (
    <>
      {!currentAuthState.isAuthenticated ? (
        <Navigate to={LOGIN} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PrivateRoute;
