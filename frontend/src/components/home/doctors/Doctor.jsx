import React from 'react'
import MenuPill from '../../MenuPill'
import doc1 from '../../../assets/images/team-1.jpg';
import doc2 from '../../../assets/images/team-2.jpg';
import doc3 from '../../../assets/images/team-3.jpg';
import { AiFillCaretRight } from 'react-icons/ai';

const Doctor = () => {
  return (
    <div className='py-8 text-center'>
        <MenuPill title={"Doctors"} style="text-gray-500 border-gray-500" />
        <h2 className=" my-6 text-[#0C3C5F] font-semibold text-3xl inter">Explore Our Best Doctors</h2>
        <div className='xl:w-[80%] mx-auto flex justify-center gap-20 pt-8'>
          <div className=' h-[500px] bg-blue-200 w-[300px] rounded-xl'>
            <img src={doc1} alt="doc" className='h-[400px] object-cover rounded-t-xl' />
            <h5 className='text-lg font-semibold my-2 pt-1'>Dr Yi Yi Khine</h5>
            <span>Nephrology</span>
          </div>
          <div className=' h-[500px] bg-blue-200 w-[300px] rounded-xl'>
            <img src={doc2} alt="doc" className='h-[400px] object-cover rounded-t-xl' />
            <h5 className='text-lg font-semibold my-2 pt-1'>Dr Khin Maung Win</h5>
            <span>Cardiology</span>
          </div>
          <div className=' h-[500px] bg-blue-200 w-[300px] rounded-xl'>
            <img src={doc3} alt="doc" className='h-[400px] object-cover rounded-t-xl' />
            <h5 className='text-lg font-semibold my-2 pt-1'>Dr Sapal Hlaing</h5>
            <span>Nephrology</span>
          </div>
        </div>
        <div className='w-[55%] mx-auto'>
          <div className='flex justify-end items-center mt-5 dark-blue text-md'>
            <p className='text-right'>view more  </p>
            <AiFillCaretRight />
          </div>
        </div>
    </div>
  )
}

export default Doctor