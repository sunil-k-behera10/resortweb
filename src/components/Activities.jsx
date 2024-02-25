import React from 'react'
import imgs from '../images/imgs.jpg'
import img from '../images/img.jpg'
import image from '../images/image.jpg'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
          <img src={img} alt=""  className='w-[400px] h-full object-cover relative border-2 border-white shadow-lg  cursor-pointer hover:transform hover:scale-105 duration-300'/>
          <h3 className='absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Resorts</h3>
          
        </div>

        <div className='relative p-4 '>
           <img src={image} alt=""  className='w-[400px] h-full object-cover relative border-2 border-white shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300'/>
          <h3 className='absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Resorts</h3>
          
        </div>

        <div className='relative p-4'>
          <img src={imgs} alt=""  className='w-[400px] h-full object-cover relative border-2 border-white shadow-lg cursor-pointer hover:transform hover:scale-105 duration-300'/>
          <h3 className='absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Resorts</h3>
        </div>

    </div>
  )
}

export default Activities