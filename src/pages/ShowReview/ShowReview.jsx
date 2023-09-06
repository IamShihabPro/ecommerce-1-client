import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import useAuth from '../../hooks/useAuth';
import Container from '../../Components/Container/Container';


const ShowReview = () => {
  const {theme} = useAuth()

  const [reviews, setReviews] = useState([])
  useEffect(()=>{
      fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      })
  },[reviews])

  // console.log(reviews);


  return (
    <Container className="bg-gray-100 ">
      <h3 className={`text-2xl font-semibold text-gray-700 mb-6 text-center ${theme === 'dark' ? 'text-slate-200' : 'text-gray-800'}`}>Reviews</h3>
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
        {
          reviews.map((review, i) => (
            <SwiperSlide key={i}> 
             
             <div className={`h-96 w-full  ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <div className='max-w-screen-md mx-auto mt-20 flex flex-col items-center justify-center h-full px-4 text-white pt-4'>

                <div className=' w-20'>
                    <img src={review.photo} alt="shihab" className='rounded-full  w-6 h-6'/>
                </div>

                <div className='mt-4 mb-2'>
                        <Rating style={{ maxWidth: 70 }} value={review.review} readOnly />
                </div>

                <div className='flex flex-col items-center text-center h-full w-full mt-2'>
                    <h2 className={`text-2xl sm:text-2xl max-w-md font-bold  ${theme === 'dark' ? 'text-blue-600' : 'text-red-600'}`}>{review.name} </h2>

                    <p className={` text-gray-900 max-w-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}> "{review.message}"</p>
                </div>

               
            </div>
           </div>
             </SwiperSlide>  
          ))
        }   
     
      </Swiper>
    </Container>
  );
};

export default ShowReview;
