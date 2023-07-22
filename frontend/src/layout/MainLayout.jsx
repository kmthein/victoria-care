import React, { useEffect } from 'react'
import Navbar from '../components/header/Navbar'
import { Outlet, useLoaderData, useNavigate, useRouteLoaderData } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { useSelector } from 'react-redux'

const MainLayout = () => {
  const token = useLoaderData();

  const currentUser = useSelector(state => state.auth.currentUser);

  const navigate = useNavigate();

  const isLogIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if(!token) {
      return;
    }
  }, [token, currentUser])

  useEffect(() => {
    navigate('/')
  }, [isLogIn])

  return (
    <>
        <Navbar />
        <div  className=" min-h-[90vh]">
        <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default MainLayout