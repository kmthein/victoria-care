import React from 'react'
import {motion} from 'framer-motion';

const DoctorItem = () => {
  return (
    <div className=' bg-[#F6F4F4] py-6 px-8 my-4'>
        <div className='flex justify-between'>
            <div className='w-[50%]'>
                <h6 className='font-medium'>Doctor Name</h6>
                <p className=' text-[14px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime officiis cupiditate</p>
            </div>
            <div className='text-[14px]'>
                <p>Sat & Sun</p>
                <p>10:00 AM – 11:00 AM</p>
                <div className=' mt-2 text-sm'>
                    <motion.button whileHover={{scale: 1.02, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className='bg-[#19376D] text-white py-2 px-2 rounded-sm'>Make Appointment</motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorItem