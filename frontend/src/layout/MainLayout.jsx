import React, { useEffect, useState } from "react";
import Navbar from "../components/header/Navbar";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { Dna } from  'react-loader-spinner'

const MainLayout = () => {
  const token = useLoaderData();

  const currentUser = useSelector((state) => state.auth.currentUser);

  const navigate = useNavigate();

  const isLogIn = useSelector((state) => state.auth.isLoggedIn);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  useEffect(() => {
    if (!token) {
      return;
    }
  }, [token, currentUser]);

  useEffect(() => {
    navigate("/");
  }, [isLogIn]);

  return (
    <>
    {
      isLoading && 
      <div className=" h-screen w-full flex justify-center items-center">
        <Dna
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
      </div>

    }
      {!isLoading && (
        <>
          <Navbar />
          <div className=" min-h-[90vh]">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
