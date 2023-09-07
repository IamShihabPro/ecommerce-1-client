import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SliderTwo = () => {
    const {theme} = useAuth()
    return (
        <div className={`h-screen w-full  ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
            <div className='max-w-screen-lg mx-auto mt-28 sm:mt-6 md:mt-4 lg:mt-0 xl:mt-0 flex flex-col items-center justify-center h-full px-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white pt-4'>
                <div className='flex flex-col justify-center h-full w-full'>
                    <h2 className={`text-3xl sm:text-4xl max-w-lg font-bold text-left ${theme === 'dark' ? 'text-blue-600' : 'text-red-600'}`}>Discover the Art of Dressing Up!</h2>

                    <p className={`py-4 text-gray-900 max-w-lg text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Elevate your closet game with the most recent fashion arrivals. Delve into our handpicked selection of clothing, accessories, and more. From everyday casual to red-carpet glamour, we've got your style needs covered.</p>
                    <div className='flex gap-4'>
                            <button className={`group mb-16 text-white w-fit flex items-center rounded-md px-6 py-3 my-2 cursor-pointer duration-200 ${theme === 'dark' ? 'bg-blue-600' : 'bg-red-600'} `}> 
                            <Link className='flex justify-center items-center' smooth duration={500} > Projects <span className='ml-2 group-hover:rotate-90 duration-200'><FaArrowRight></FaArrowRight> </span></Link>
                            
                            </button>
                    </div>
                </div>

                <div className='md:ml-4 -mt-10 sm:-mt-6 md:-mt-0 lg:-mt-0 xl:-mt-0 pl-2'>
                    <img src='https://img.freepik.com/premium-photo/stylish-persian-teenage-girl-with-vintage-camera_1308-151856.jpg?w=740' alt="shihab" className='rounded-2xl mx-auto  md:w-96 lg:w-full w-2/3 md:ml-16'/>
                </div>
            </div>
        </div>
    );
};

export default SliderTwo;