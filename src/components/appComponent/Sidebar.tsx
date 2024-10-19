import i2i from "../../assets/images/ideas2it.webp";
import SidebarCard from "./SidebarCard";
import { sidebarOptions } from "../../data/sidebarOptions";

const Sidebar = () => {
  return (
    <aside className="z-40 w-64 h-screen">
      <div className="h-full px-3 py-4  overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="flex justify-center">
          <img src={i2i} className="w-36 h-36" />
        </div>
        <ul className="space-y-2 font-medium mt-5 text-lg">
          {sidebarOptions.map((option) => (
            <SidebarCard option={option} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
