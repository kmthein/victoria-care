import React from 'react'
import Navbar from '../components/header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout