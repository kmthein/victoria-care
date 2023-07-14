import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import SearchBar from '../components/search-bar/SearchBar'
import DoctorList from '../components/doctor/DoctorList'

const DoctorPage = () => {
  return (
    <>
      <Breadcrumb title={"Doctor"} />
      <div className='w-[50%] mx-auto'>
        <SearchBar placeholder={"Search by doctor name"}/>
        <DoctorList />
      </div>

    </>
  )
}

export default DoctorPage