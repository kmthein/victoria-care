import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/admin/header/Navbar";
import Sidebar from "../components/admin/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-start">
          <Sidebar />
        <div className="bg-[#EAEBEF] w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
