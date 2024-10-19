import { employeeType } from "./employeeType";

export interface initialEmployeeState{
    employee: employeeType[],
    currentPage: number,
    totalPage: number,
    limit: number
}