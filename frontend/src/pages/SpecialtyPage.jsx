import React from 'react'
import SearchBar from '../components/search-bar/SearchBar'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import SpecialtyItem from '../components/specialty/SpecialtyItem'

const SpecialtyPage = () => {
  return (
    <>
      <Breadcrumb title={"Specialty"} />
      <div className='w-[50%] mx-auto'>
        <SearchBar placeholder={"Search by specialty name"} />
        <div className=' flex flex-wrap gap-6 mb-8'>
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
          <SpecialtyItem />
        </div>
      </div>
    </>
  )
}

export default SpecialtyPage