import React from 'react'
import DoctorItem from './DoctorItem'

const DoctorList = () => {
  return (
    <div className=' mb-8'>
        <h3 className=' text-lg font-semibold'>Available Doctors</h3>
        <DoctorItem />
        <DoctorItem />
        <DoctorItem />
    </div>
  )
}

export default DoctorList