import { employeeType } from "../../types/employeeType";
import user from "../../assets/images/alternate-user.png"
interface EmployeeCardProps {
  profile: employeeType;
}
const EmployeeCard = ({ profile }: EmployeeCardProps) => {
  return (
    <div
      className="relative w-64 h-82 rounded-xl border shadow flex flex-col p-5 gap-3 bg-white"
      key={profile.id}
    >
      <div className="h-28 flex items-center justify-center">
        <img
          src={profile.imgUrl? profile.imgUrl : user}
          alt="userImage"
          className="w-28 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="font-semibold text-lg">{profile.firstName}</div>
        <div className="overflow-x-hidden w-48 overflow-hidden text-ellipsis">{profile.email}</div>
        <div className="text-slate-500">{profile.designation.name}</div>
      </div> 
      <div className="flex h-14 border-t-2 text-slate-500 border-b-2 text-xs items-center justify-between">
        <div className="flex flex-col gap-1" >Overall Experience <div className="text-gray-600 text-center">{profile.totalExperience}</div></div>
        <div className="flex flex-col gap-1" >Ideas2it Experience <div className="text-gray-600 text-center">{profile.ideas2itExperience}</div></div>
      </div>
      <div className="flex items-center justify-center text-sm text-slate-500">
        NO BADGES AT THIS MOMENT
      </div>
    </div>
  );
};

export default EmployeeCard;
