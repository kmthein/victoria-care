import React from 'react'
import { BsPeople } from 'react-icons/bs';
import { GoClockFill } from 'react-icons/go';
import { FaAmbulance } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import featureImg from '../../../assets/images/feature-img.jpg'; 
import MenuPill from '../../MenuPill';

const Features = () => {
  return (
    <div className=' flex w-full'>
        <div className='xl:h-[500px] bg-[#194ba2] w-full md:w-[50%]'>
            <div className=' mt-[80px] ml-[20%] inter'>
                <MenuPill title={"Features"} style=" text-white" />
                <h2 className=" my-6 py-3 text-white font-semibold text-3xl">Why Choose Us?</h2>
                <div className='flex gap-4 items-center my-6'>
                    <BsPeople className=' text-yellow-300 text-3xl' />
                    <span className='text-white'>Qualified Doctors</span>
                </div>
                <div className='flex gap-4 items-center my-6'>
                    <GoClockFill className=' text-white text-3xl' />
                    <span className='text-white'>24 hours Service</span>
                </div>
                <div className='flex gap-4 items-center my-6'>
                    <FaAmbulance className=' text-red-500 text-3xl' />
                    <span className='text-white'>Ambulance</span>
                </div>
                <div className='flex gap-4 items-center my-6'>
                    <BiPhone className=' text-orange-400 text-3xl' />
                    <span className='text-white'>Call Center</span>
                </div>
            </div>
        </div>
        <div className='hidden md:block w-[50%]'>
            <img src={featureImg} alt="feature-img" className='w-full md:h-[500px] xl:h-[500px] object-cover' />
        </div>
    </div>
  )
}

export default Features