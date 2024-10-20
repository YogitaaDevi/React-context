import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { initialEmployeeState } from "../types/initialEmployeeState";
import { EmployeeAction } from "../enum/employeeAction";
import { employeeType } from "../types/employeeType";
import { apiService } from "../services/apiService";
import { AuthContextProvider } from "./AuthContext";

interface EmployeeContextProps {
  children: ReactNode;
}

const initialState: initialEmployeeState = {
  employee: [],
  currentPage: 0,
  totalPage: 1,
  limit: 48,
};

interface ActionType {
  type: EmployeeAction;
  payload?: employeeType[] | number;
}

const employeeReducer = (
  state: initialEmployeeState,
  action: ActionType
): initialEmployeeState => {
  switch (action.type) {
    case EmployeeAction.DISPLAY_ALL_EMPLOYEES: {
      return {
        ...state,
        employee: [...state.employee, ...(action.payload as employeeType[])],
      };
    }
    case EmployeeAction.CURRENT_PAGE: {
      return { ...state, currentPage: action.payload as number };
    }
    case EmployeeAction.TOTAL_PAGE: {
      return { ...state, totalPage: action.payload as number };
    }
    default: {
      return state;
    }
  }
};

const EmployeeContextValue = {
  currentState: initialState,
  dispatch: (_value: ActionType) => {},
};

export const EmployeeContextProvider = createContext(EmployeeContextValue);

const EmployeeContext = ({ children }: EmployeeContextProps) => {
  const [currentState, dispatch] = useReducer(employeeReducer, initialState);
  const { currentAuthState } = useContext(AuthContextProvider);

  useEffect(() => {
    if (currentAuthState.isAuthenticated) {
      const offset = currentState.currentPage * currentState.limit;

      apiService
        .get(
          `/employee/profiles?start=${offset}&limit=${currentState.limit}&filter=`
        )
        .then((response) => {
          dispatch({
            type: EmployeeAction.DISPLAY_ALL_EMPLOYEES,
            payload: response.data.entity.list,
          });
          dispatch({
            type: EmployeeAction.TOTAL_PAGE,
            payload: Math.ceil(response.data.entity.count / currentState.limit),
          });
          console.log(
            Math.ceil(response.data.entity.count / currentState.limit)
          );
        })
        .catch((error) => {
          console.error("Error fetching employee profiles:", error);
        });
    }
  }, [currentState.currentPage, currentAuthState.isAuthenticated]);

  console.log(currentAuthState.isAuthenticated);
  console.log(currentState.currentPage, currentState.employee);
  console.log(localStorage.getItem("accesToken"));
  
  return (
    <EmployeeContextProvider.Provider value={{ currentState, dispatch }}>
      {children}
    </EmployeeContextProvider.Provider>
  );
};

export default EmployeeContext;
