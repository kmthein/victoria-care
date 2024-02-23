import React from 'react'
import DoctorItem from './DoctorItem'

const DoctorList = ({doctors}) => {
  return (
    <div className=' mb-8'>
        {doctors.length > 0 &&<h3 className=' text-lg font-semibold'>Available Doctors</h3>}
        {
          doctors && doctors.length > 0 ?
          doctors.map((doctor, i) => (
            <DoctorItem key={i} id={doctor._id} name={doctor.name} qualification={doctor.qualification} fees={doctor.doctor_fees} schedules_day={doctor.schedule_day} schedules_time={doctor.schedule_time} specialty_id={doctor.specialtyId} />
          )) :
          <p className='text-center'>No Doctors Available.</p>
        }
    </div>
  )
}

export default DoctorList