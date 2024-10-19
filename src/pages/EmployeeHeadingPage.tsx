import EmployeeList from "../components/appComponent/EmployeeList";

const EmployeeHeadingPage = () => {
  return (
    <div className="text-3xl font-bold text-indigo-900 w-5/6 flex justify-between">
      <div className="flex items-center">Presenting our ideas2IT Family</div>
      <EmployeeList />
    </div>
  );
};

export default EmployeeHeadingPage;
