import React, { useEffect } from 'react'
import Navbar from '../components/header/Navbar'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { useSelector } from 'react-redux'

const MainLayout = () => {
  const token = useLoaderData();

  const currentUser = useSelector(state => state.auth.currentUser);

  const navigate = useNavigate()

  useEffect(() => {
    if(!token) {
      return;
    }
    navigate('/')  
  }, [token, currentUser])

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout