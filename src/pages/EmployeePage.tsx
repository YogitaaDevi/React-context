import { useContext } from "react";
import { EmployeeContextProvider } from "../context/EmployeeContext";
import EmployeeCard from "../components/appComponent/EmployeeCard";

const EmployeePage = () => {
  const { currentState } = useContext(EmployeeContextProvider);
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {currentState.employee.map((data) => (
        <EmployeeCard key={data.id} profile={data} />
      ))}
    </div>
  );
};

export default EmployeePage;
