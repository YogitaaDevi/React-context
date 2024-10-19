import { createContext, ReactNode, useReducer } from "react";
import { InitialAuthState } from "../types/initailAuthState";
import { UserAction } from "../enum/userAction";

interface AuthContextProps {
  children: ReactNode;
}

const initialState: InitialAuthState = {
  isAuthenticated: false
}

interface ActionType {
  type: UserAction
}

const AuthReducer = (_state: InitialAuthState, action: ActionType): InitialAuthState => {
  switch(action.type) {
    case UserAction.AUTHENTICATE_USER: {
      return {isAuthenticated: true};
    }
    case UserAction.UNAUTHENTICATE_USER: {
      return {isAuthenticated: false};
    }
  }
}

const AuthContextValue = {
  currentAuthState: initialState,
  dispatch: (_value: ActionType) => {}
};

export const AuthContextProvider = createContext(AuthContextValue);

const AuthContext = ({ children }: AuthContextProps) => {
  const [currentAuthState, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContextProvider.Provider value={{currentAuthState, dispatch}}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
