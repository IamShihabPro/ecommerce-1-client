import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SliderOne from './SliderOne';
import SliderTwo from './SliderTwo';
import SliderThree from './SliderThree';
import useAuth from '../../hooks/useAuth';


const Banner = () => {
  const {theme} = useAuth()
  return (
    <div className="bg-gray-100 -mt-28">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, ]}
        className="mySwiper"
      >
        <SwiperSlide> <SliderOne></SliderOne> </SwiperSlide>
        <SwiperSlide> <SliderTwo></SliderTwo> </SwiperSlide>     
        <SwiperSlide> <SliderThree></SliderThree> </SwiperSlide>     
     
      </Swiper>
    </div>
  );
};

export default Banner;
