import EmployeeHeadingPage from "./EmployeeHeadingPage";
import EmployeePage from "./EmployeePage";
const EmployeeDisplayPage = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <EmployeeHeadingPage />
      <EmployeePage />
    </div>
  );
};

export default EmployeeDisplayPage;
