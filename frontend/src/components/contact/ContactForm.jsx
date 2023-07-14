import React from 'react'
import MenuPill from '../MenuPill'

const ContactForm = () => {
  return (
    <div className=' bg-[#F6F4F4] py-12 px-20 w-[50%] h-[600px]'>
        <MenuPill title={"Contact Us"} style={"text-[#527fa0] border-[#80a6c2]"} />
        <h2 className='mt-8 text-3xl font-bold'>If you have any question?</h2>
        <h2 className='mb-8 text-3xl font-bold'>Please Contact Us!</h2>
        <div className='inter contact-input'>
            <div className='flex gap-4'>
                <input type="text" placeholder='Your Name' className='py-2 px-4 w-[50%]  rounded-md' />
                <input type="text" placeholder='Your Email' className='py-2 px-4 w-[50%]  rounded-md' />
            </div>
            <div className=' my-4'>
                <input type="text" placeholder='Subject' className='py-2 px-4 w-full rounded-md' />
            </div>
            <div className=' my-4'>
                <input type="text" placeholder='Phone Number (Optional)' className='py-2 px-4 w-full rounded-md' />
            </div>
            <div className=' my-4'>
                <textarea type="text" placeholder='Message' rows={5} className='py-2 px-4 w-full rounded-md' />
            </div>
            <div className=' flex justify-center'>
                <button className='bg-[#576CBC] text-white text-[15px] py-2 px-8 rounded-md'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default ContactForm