import React from 'react'
import imagees from '../images/imagees.jpg'

const Body = () => {
  return ( 
    <div className='w-full h-[90vh]'>
      <img src={imagees} alt="" className='w-full object-cover h-full'/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] text-justify h-full flex flex-col text-white px-4'>
          <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
          <h2 className='text-4
           py-4 italic'>With <span className='text-blue-500'>RESORT BOOK</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore cupiditate voluptatem nisi, illum natus laboriosam rem tenetur deserunt, totam ad veniam! Aliquid expedita vitae consequuntur non ratione laudantium nam?
          </p>
          <div>
            <button className='my-5 rounded-md border-none'>Booking Open</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body