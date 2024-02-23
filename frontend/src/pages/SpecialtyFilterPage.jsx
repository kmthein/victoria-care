import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import { useSelector } from 'react-redux'
import DoctorItem from '../components/doctor/DoctorItem';

const SpecialtyFilterPage = () => {
    const doctors = useSelector(state => state.search.filterBySpecialty);

    return (
    <>
      <div className='w-[50%] mx-auto pt-4 my-8 min-h-[80vh]'>
      <div className=' mb-8'>
      {doctors.length > 0 && <h3 className=' text-lg font-semibold'>Available Doctors</h3>}
        {      
          doctors && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorItem key={doctor.id} id={doctor._id} name={doctor.name} qualification={doctor.qualification} fees={doctor.doctor_fees} schedules_day={doctor.schedule_day} schedules_time={doctor.schedule_time} specialty_id={doctor.specialtyId} />
          ))) : 
          (
            <p className='text-center text-xl mt-20'>No doctors available!</p>
          )
        }
    </div>
      </div>
    </>
  )
}

export default SpecialtyFilterPage