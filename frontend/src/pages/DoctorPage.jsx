import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import SearchBar from '../components/search-bar/SearchBar'
import DoctorList from '../components/doctor/DoctorList'
import axios from 'axios'
import { url } from '../api/api'
import { useLoaderData } from 'react-router-dom'

const DoctorPage = () => {
  const doctors = useLoaderData();

  return (
    <>
      <Breadcrumb title={"Doctor"} />
      <div className='w-[80%] md:w-[50%] mx-auto'>
        <SearchBar placeholder={"Search by doctor name"} submitType={"searchDoctor"}/>
        <DoctorList doctors={doctors} />
      </div>

    </>
  )
}

export default DoctorPage

export const loader = async () => {
  const res = await axios.get(`${url}/doctor`)
  if(!res.ok) {

  } 
  return res.data;
}