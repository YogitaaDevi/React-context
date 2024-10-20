import { useContext } from "react";
import { EmployeeContextProvider } from "../context/EmployeeContext";
import EmployeeCard from "../components/appComponent/EmployeeCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { EmployeeAction } from "../enum/employeeAction";
import LoaderPage from "./LoaderPage";

const EmployeePage = () => {
  const { currentState, dispatch } = useContext(EmployeeContextProvider);

  const fetchMoreData = () => {
    if (currentState.currentPage < currentState.totalPage - 1) {
      dispatch({
        type: EmployeeAction.CURRENT_PAGE,
        payload: currentState.currentPage + 1,
      });
    }
  };

  console.log(currentState.currentPage, currentState.totalPage);

  return (
    <InfiniteScroll
      dataLength={currentState.employee.length}
      next={fetchMoreData}
      hasMore={currentState.currentPage < currentState.totalPage - 1}
      loader={<LoaderPage />}
      endMessage={
        <p className="text-center text-2xl font-bold text-indigo-900 mt-5">
          Yay! You have seen all our members
        </p>
      }
    >
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {currentState.employee.map((data) => (
          <EmployeeCard key={data.id} profile={data} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default EmployeePage;
