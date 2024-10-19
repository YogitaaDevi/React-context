import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { EmployeeAction } from "../../enum/employeeAction";
import { EmployeeContextProvider } from "../../context/EmployeeContext";
import { useContext } from "react";

const EmployeeList = () => {
  const { currentState, dispatch } = useContext(EmployeeContextProvider);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch({ type: EmployeeAction.CURRENT_PAGE, payload: value - 1 });
  };

  return (
    <div className="flex items-center -mt-5">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        sx={{ marginTop: 2 }}
      >
        <Pagination
          count={currentState.totalPage}
          page={currentState.currentPage + 1}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default EmployeeList;
