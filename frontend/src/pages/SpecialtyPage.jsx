import React, { useEffect } from 'react'
import SearchBar from '../components/search-bar/SearchBar'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import SpecialtyItem from '../components/specialty/SpecialtyItem'
import axios from 'axios'
import { url } from '../api/api'
import { useLoaderData, useLocation, useRouteLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchActions } from '../store/reducer/searchReducer'

const SpecialtyPage = () => {
  const specialty = useSelector((state) => state.search.specialties);
  const specialties = useRouteLoaderData('specialty');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.allSpecialties(specialties))
  }, [specialties])

  return (
    <>
      <Breadcrumb title={"Specialty"} />
      <div className='w-[50%] mx-auto'>
        <SearchBar placeholder={"Search by specialty name"} submitType={"searchSpecialty"} />
        <div className=' flex flex-wrap gap-6 mb-8'>
          {
            specialties && specialties.length > 0 ?
            specialties.map((specialty) => (
              <SpecialtyItem key={specialty.id} id={specialty.id} name={specialty.specialty_name}  />
            )) :
            <p className='mx-auto'>No Results Available.</p>
          }
        </div>
      </div>
    </>
  )
}

export default SpecialtyPage

export const loader = async () => {
  try {
    const res = await axios.get(`${url}/specialty`)
    
    return res.data;    
  } catch (error) {
    return error;
  }

}