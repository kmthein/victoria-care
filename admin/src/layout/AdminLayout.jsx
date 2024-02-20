import React, { useEffect } from "react";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/admin/header/Navbar";
import Sidebar from "../components/admin/sidebar/Sidebar";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const adminToken = useLoaderData();

  const currentAdmin = useSelector(state => state.auth.currentAdmin);

  const navigate = useNavigate();

  const isAdminLogIn = useSelector(state => state.auth.isAdminLoggedIn);

  useEffect(() => {
    if(!adminToken) {
      return navigate("/admin/login");
    }
  }, [adminToken])

  useEffect(() => {
    navigate('/admin')
  }, [isAdminLogIn])

  return (
    <>
      <Navbar />
      <div className="flex justify-start min-h-screen">
          <Sidebar />
        <div className="bg-[#EAEBEF] w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
