import React from 'react'
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const DoctorItem = ({id, name, qualification, schedules}) => {
   return (
    <div className=' bg-[#F6F4F4] py-6 px-8 my-4'>
        <div className='flex justify-between'>
            <div className='w-[50%]'>
                <h6 className='font-medium'>{name}</h6>
                <p className=' text-[14px]'>{qualification}</p>
            </div>
            <div className='text-[14px]'>
                <span className='text-right'>
                    {schedules.length > 0 && schedules.map((schedule) => (
                        <p>{schedule.day} - {schedule.time}</p>
                    ))}
                </span>
                <div className=' mt-2 text-sm flex justify-end'>
                    <Link to='/appointment'>
                    <motion.button whileHover={{scale: 1.02, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className='bg-[#19376D] text-white py-2 px-2 rounded-sm'>Make Appointment</motion.button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorItem