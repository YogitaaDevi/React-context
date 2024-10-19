import Header from "../components/appComponent/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/appComponent/Sidebar";
import "../assets/scss/AppLayout.scss";

const AppLayout = () => {
  return (
    <div className="h-auto bg-slate-200 flex">
      <div className="sidebar fixed">
        <Sidebar />
      </div>
      <div className="header flex flex-col ml-64 w-full">
        <div className="fixed z-10">
          <Header />
        </div>
        <div className="mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
