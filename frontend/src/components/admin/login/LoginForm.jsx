import React from 'react'
import whiteLogo from '../../../assets/images/white-logo.png';
import { BsPersonFill } from 'react-icons/bs';
import { FaKey } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className=' bg-[#303B40] w-[30%] mx-auto py-8'>
        <img src={whiteLogo} alt="logo" className=' mx-auto pt-8' />
        <p className='text-white text-center mt-3'>Admin Panel</p>
        <div className=' w-[70%] mx-auto mt-20 admin-login'>
            <div className=' flex items-center gap-4'>
                <BsPersonFill className=' text-2xl text-[#BCBCBC]' />
                <input type="text" placeholder='Email Address' className=' bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px]' />
            </div>
            <div className=' flex items-center gap-4 mt-10'>
                <FaKey className=' text-xl text-[#BCBCBC]' />
                <input type="text" placeholder='Password' className=' bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px]' />
            </div>
            <div className=' flex justify-center my-12'>
                <button className=' bg-[#BCBCBC] py-2 px-6 rounded-full'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm