import React from 'react'
import { AiFillPhone,  AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        < BsChatSquareDots size={30} className='mr-2 text-[var(--primary-dark)]'/>
        <h1 className='text-xl font-bold text-purple-700'>RESORT BOOK</h1>
      </div> 
      <div className='flex'> 
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
          <p className='text-sm text-gray-500 '>9AM - 5PM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
          <p className='text-sm text-gray-500 '>464646462626</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  )
}

export default Topbar