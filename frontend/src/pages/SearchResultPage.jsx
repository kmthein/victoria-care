import React, { useEffect } from 'react'
import SearchBar from '../components/search-bar/SearchBar'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import SpecialtyItem from '../components/specialty/SpecialtyItem'
import axios from 'axios'
import { url } from '../api/api'
import { useLoaderData, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchActions } from '../store/reducer/searchReducer'

const SearchResultPage = () => {
    const specialties = useSelector(state => state.search.searchSpecialty);

  return (
    <>
    <Breadcrumb title={"Specialty"} />
      <div className='w-[50%] mx-auto min-h-[80vh]'>
        <SearchBar placeholder={"Search by specialty name"} />
        <div className=' flex flex-wrap gap-6 mb-8'>
        {
            specialties.length > 0 ?
            specialties.map((specialty) => (
              <SpecialtyItem key={specialty._id} id={specialty._id} name={specialty.name} />
            )) :
            <p className=' mx-auto text-gray-700'>No results found</p>
          }
        </div>
      </div>
    </>
  )
}

export default SearchResultPage
