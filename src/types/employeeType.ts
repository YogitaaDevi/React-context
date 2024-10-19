export interface employeeType {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  email: string;
  dateOfJoin: string;
  employeeCompanyId: string;
  totalExperience: string;
  bloodGroup: null;
  designation: {
    id: number;
    createdBy: number;
    modifiedBy: number;
    createdAt: number;
    modifiedAt: number;
    name: string;
    description: string;
    isActive: boolean;
    active: boolean;
  };
  isNewBie: null;
  ideas2itExperience: string;
  achievements: [];
  count: number;
  newBie: null;
  fullName: string;
}
