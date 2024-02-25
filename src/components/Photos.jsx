import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img from '../images/img.jpg';
import imga from '../images/imga.jpg';
import imge from '../images/imge.jpg';
import imger from '../images/imger.jpg';
import imgg from '../images/imgg.jpg';
import imggg from '../images/imggg.jpg'
import imgs from '../images/imgs.jpg'
import img3 from '../images/img3.jpg'
import image from '../images/image.jpg'



// import required modules
import { Pagination,Autoplay } from 'swiper/modules';


const Photos = () => {
  return (
    <>
    <div className='text-center text-6xl mt-4'>
        <h1>Our New <span className='italic font-bold text-purple-600'>Resort</span> Destinations</h1>
    </div>

    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      
      <SwiperSlide className='mt-8'>
        <img src={img} alt=""  className='h-[240px] w-[500px]'/>
      </SwiperSlide>
      <SwiperSlide className='mt-8'>
        <img src={imga} alt=""  className='h-[240px] w-[500px]'/>
      </SwiperSlide>
      <SwiperSlide className='mt-8'>
        <img src={imge} alt="" className='h-[240px] w-[500px]' />
      </SwiperSlide>
      <SwiperSlide className='mt-8'>
        <img src={imger} alt="" className='h-[240px] w-[500px]' />
      </SwiperSlide>
      <SwiperSlide className='mt-8'>
        <img src={imgg} alt=""  className='h-[240px] w-[500px]'/>
      </SwiperSlide>
      <SwiperSlide className='mt-8  '>
        <img src={imggg} alt="" className='h-[240px] w-[500px]'/>
      </SwiperSlide>
      <SwiperSlide className='mt-8'>
        <img src={imgs} alt="" className='h-[240px] w-[500px]'/>
      </SwiperSlide>
      <SwiperSlide className='mt-8'>
        <img src={img3} alt="" className='h-[240px] w-[500px]'/>
      </SwiperSlide>
      <SwiperSlide className='mt-8'>
        <img src={image} alt="" className='h-[240px] w-[500px]'/>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Photos