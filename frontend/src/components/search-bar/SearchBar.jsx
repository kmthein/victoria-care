import React from 'react'
import { BiSearch, BiSearchAlt2 } from 'react-icons/bi'

const SearchBar = ({placeholder}) => {
  return (
    <div className='search_box my-8 py-2 rounded-md px-2'>
        <div className=' flex items-center gap-2'>
        <BiSearchAlt2 className='text-xl text-gray-500 mt-1'/>
        <input type="text" placeholder={placeholder} className='w-full text-[15px] focus:outline-none' />
        </div>
    </div>
  )
}

export default SearchBar