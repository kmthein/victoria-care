import React from 'react'
import { motion } from 'framer-motion'

const SpecialtyItem = () => {
  return (
    <motion.div whileHover={{scale: 1.02, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", color: "gray"}} className=' bg-[#F6F4F4] w-[208px] py-12 text-center rounded-md cursor-pointer'>
        <span>Specialty Name</span>
    </motion.div>
  )
}

export default SpecialtyItem