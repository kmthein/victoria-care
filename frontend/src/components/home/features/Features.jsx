import React from 'react'
import { BsPeople } from 'react-icons/bs';
import { GoClockFill } from 'react-icons/go';
import { FaAmbulance } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import featureImg from '../../../assets/images/feature-img.jpg'; 
import MenuPill from '../../MenuPill';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <div className=' flex w-full'>
        <div className='xl:h-[500px] bg-[#194ba2] w-full md:w-[50%]'>
            <div className=' mt-[80px] ml-[20%] inter'>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 0.8, duration: 1.5}}>
                    <MenuPill title={"Features"} style=" text-white" />
                </motion.div>
                <motion.h2 initial={{x: '-100vw'}} animate={{ x: 0 }} transition={{ delay: 0.8, duration: 1.5}} className=" my-6 py-3 text-white font-semibold text-3xl">Why Choose Us?</motion.h2>
                <motion.div initial={{x: '-100vw'}} animate={{ x: 0 }} transition={{ delay: 1, duration: 1.5}}  className='flex gap-4 items-center my-6'>
                    <BsPeople className=' text-yellow-300 text-3xl' />
                    <span className='text-white'>Qualified Doctors</span>
                </motion.div>
                <motion.div initial={{x: '-100vw'}} animate={{ x: 0 }} transition={{ delay: 1.2, duration: 1.5}}  className='flex gap-4 items-center my-6'>
                    <GoClockFill className=' text-white text-3xl' />
                    <span className='text-white'>24 hours Service</span>
                </motion.div>
                <motion.div initial={{x: '-100vw'}} animate={{ x: 0 }} transition={{ delay: 1.4, duration: 1.5}}  className='flex gap-4 items-center my-6'>
                    <FaAmbulance className=' text-red-500 text-3xl' />
                    <span className='text-white'>Ambulance</span>
                </motion.div>
                <motion.div initial={{x: '-100vw'}} animate={{ x: 0 }} transition={{ delay: 1.6, duration: 1.5}}  className='flex gap-4 items-center my-6'>
                    <BiPhone className=' text-orange-400 text-3xl' />
                    <span className='text-white'>Call Center</span>
                </motion.div>
            </div>
        </div>
        <div className='hidden md:block w-[50%]'>
            <img src={featureImg} alt="feature-img" className='w-full md:h-[500px] xl:h-[500px] object-cover' />
        </div>
    </div>
  )
}

export default Features