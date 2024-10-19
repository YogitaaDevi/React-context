import { SidebarType } from "../../types/sidebarType";
import { Icons } from "../Icons";
import { useNavigate } from "react-router-dom";
import {
  DASHBOARD,
  DASHBOARD_MENU,
  EMPLOYEE,
  EMPLOYEE_LOOKUP_MENU,
  LOGOUT,
} from "../../utils/constants";
import { useContext } from "react";
import { AuthContextProvider } from "../../context/AuthContext";
import { UserAction } from "../../enum/userAction";

interface SidebarCardProps {
  option: SidebarType;
}

const SidebarCard = ({ option }: SidebarCardProps) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContextProvider);

  const handleOption = (name: string) => {
    if (name === EMPLOYEE_LOOKUP_MENU) navigate(EMPLOYEE);
    if (name === DASHBOARD_MENU) navigate(DASHBOARD);
    if (name === LOGOUT) dispatch({ type: UserAction.UNAUTHENTICATE_USER });
  };

  return (
    <li className="hover:cursor-pointer">
      <div
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        onClick={() => handleOption(option.name)}
      >
        <Icons type={option.icon} />
        <div className="ms-3 text-blue-950">{option.name}</div>
      </div>
    </li>
  );
};

export default SidebarCard;
