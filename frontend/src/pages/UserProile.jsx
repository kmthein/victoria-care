import React from 'react'

const UserProile = () => {
  return (
    <div>
        <div className=' w-[50%] mx-auto'>
            <div className=''>
            <div>
            <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" className=' w-20 h-20 rounded-full object-cover' />
            <div className=' mt-4'>
                <p>John Stones</p>
                <span className=' text-gray-600'>johnstones@gmail.com</span>
            </div>
            <div className=' mt-20'>
                <button className=' bg-[#313131] text-white'>Logout</button>
            </div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default UserProile