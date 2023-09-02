import React from 'react'
import footerLogo from "../../assets/images/white-logo.png";
import { FaHospitalAlt } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className=' bg-[#19376d] py-8 text-white'>
        <div className='w-[90%] mx-auto'>
            <div className=' sm:flex items-start justify-between'>
                <div>
                <img src={footerLogo} alt="footer-logo" className="mx-auto w-[170px] md:w-[200px]" />
                {/* <div className=' text-white flex items-center gap-2 mt-2 text-sm'>
                    <FaHospitalAlt />
                    <span>No.68, Taw Win Road, 9 Mile, Yangon</span>
                </div>
                <div className=' text-white flex items-center gap-2 mt-2 text-sm'>
                    <BsTelephoneFill />
                    <span>+951-9666141</span>
                </div>
                <div className=' text-white flex items-center gap-2 mt-2 text-sm'>
                    <HiMail />
                    <span>info@witoriyahospital.com</span>
                </div> */}
                </div>
                <div className=' sm:ml-20'>
                    <div className=' sm:flex gap-2 ml-10 mt-4 sm:ml-0 sm:mt-0 text-[15px] footer-nav'>
                        <Link to='/' className=' sm:border-r-2 pr-2'>Home</Link>
                        <Link to='/about' className=' sm:border-r-2 pr-2'>About</Link>
                        <Link to='/doctor' className=' sm:border-r-2 pr-2'>Doctor</Link>
                        <Link to='/specialty' className=' sm:border-r-2 pr-2'>Specialty</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                        <p className='text-center mt-2 text-white/80'>© 2023 kmthein</p>
                </div>
                <div className='mt-4 sm:mt-0 bg-white rounded-md flex items-center py-[6px] px-2 text-sm'>
                    <AiOutlineMail className='text-gray-500 mt-[2px] text-lg' />
                    <input type="text" className='w-full text-black text-[15px] px-2 focus:outline-none' placeholder='Type your email address' />
                    <button className='bg-[#5FA5D9] py-1 px-2 rounded-md text-[15px]'>Subscribe</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer