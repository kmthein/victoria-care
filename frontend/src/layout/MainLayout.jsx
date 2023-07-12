import React from 'react'
import Navbar from '../components/header/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout