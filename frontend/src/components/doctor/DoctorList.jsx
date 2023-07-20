import React from 'react'
import DoctorItem from './DoctorItem'

const DoctorList = ({doctors}) => {
  return (
    <div className=' mb-8'>
        {doctors.length > 0 &&<h3 className=' text-lg font-semibold'>Available Doctors</h3>}
        {
          doctors && doctors.length > 0 ?
          doctors.map((doctor) => (
            <DoctorItem key={doctor.id} id={doctor.id} name={doctor.name} qualification={doctor.qualification} schedules_day={JSON.parse(doctor.schedule_day)} schedules_time={JSON.parse(doctor.schedule_time)} />
          )) :
          <p className='text-center'>No Doctors Available.</p>
        }
    </div>
  )
}

export default DoctorList