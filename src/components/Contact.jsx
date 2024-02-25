import React from 'react'
import image from '../images/image.jpg'

const Contact = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-800'>Send us a message</h2>
      <p className='text-center text-gray-400 py-2'>We're standing by</p>
      <div className='grid md:grid-cols-2'>
        <img src={image} alt="" className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
        <form >
          <div className='grid grid-cols-2 '>
            <input className='border m-2 p-2' type="text" placeholder='First'/>
            <input className='border m-2 p-2' type="text" placeholder='Last'/>
            <input className='border m-2 p-2' type="email" placeholder='Email'/>
            <input className='border m-2 p-2' type="tel" placeholder='Phone'/>
            <input className='border m-2 p-2 col-span-2' type="text" placeholder='Address'/>
            <textarea   className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
            <button className='m-2 col-span-2 md:col-span-1'>Submit</button>
          </div>
      
        </form>
      </div>
    </div>
  )
}

export default Contact