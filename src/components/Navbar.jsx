import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";
import { FaFacebook ,  FaTwitter , FaInstagram,  FaYoutube } from "react-icons/fa";


const Navbar = () => {
  const[nav,setNav] = useState(false)


    const clickNav = ()=>{
      setNav(!nav);
    }

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        <li>
          <a href="/" className='hover:text-purple-500'>Home</a>
        </li>
        <li>
          <a href="#gallery" className='hover:text-purple-500'>Gallery</a>
        </li>
        <li>
          <a href="#deals" className='hover:text-purple-500'>Deals</a>
        </li>
        <li>
          <a href="#contact" className='hover:text-purple-500'>Contact</a>
        </li>
      </ul>

      <div className='flex justify-between'>
        <FaFacebook className='mx-4'/>
        <FaTwitter className='mx-4'/>
        <FaInstagram className='mx-4'/>
        <FaYoutube className='mx-4' />
      </div>

      <div onClick={clickNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer'/>
      </div>

      <div onClick={clickNav} className= {nav?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full' : 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
        <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8 '>
              <a href="/" className='hover:text-blue-600 hover:cursor-pointer'>Home</a>
            </li>
            <li className='text-2xl py-8'>
              <a href="#gallery" className='hover:text-blue-600 hover:cursor-pointer'>Gallery</a>
            </li>
            <li className='text-2xl py-8'>
              <a href="#deals" className='hover:text-blue-600 hover:cursor-pointer'>Deals</a>
            </li>
            <li className='text-2xl py-8'>
              <a href="#contact" className='hover:text-blue-600 hover:cursor-pointer'>Contact</a>
            </li>
      </ul>
        
      </div>
    </div>
  )
}

export default Navbar