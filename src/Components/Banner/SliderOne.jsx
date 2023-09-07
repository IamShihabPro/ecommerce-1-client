import React from 'react';
import useAuth from '../../hooks/useAuth';

const SliderOne = () => {
    const {theme} = useAuth()
    return (
        <div className={`h-screen w-full  ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white pt-4'>
                <div className='flex flex-col justify-center h-full w-full'>
                    <h2 className={`text-3xl sm:text-4xl max-w-lg font-bold text-left  ${theme === 'dark' ? 'text-blue-600' : 'text-red-600'}`}>Unveil the Latest Fashion Sensations! </h2>

                    <p className={`py-4 text-gray-900 max-w-lg text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Upgrade your wardrobe with the hottest trends in fashion. Explore our handpicked collection of clothing, accessories, and more. From chic streetwear to elegant evening dresses, we've got something for everyone.</p>
                </div>

                <div className='md:ml-4 -mt-10 sm:-mt-6 md:-mt-0 lg:-mt-0 xl:-mt-0 pl-2'>
                    <img src='https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man-wearing-sunglasses_158538-5022.jpg?w=360&t=st=1693688598~exp=1693689198~hmac=29d957744948fdfde8116a3ca003cd9d634389857f453862940fedfe01807b04' alt="shihab" className='rounded-2xl mx-auto  md:w-96 lg:w-full w-2/3 md:ml-16'/>
                </div>
            </div>
        </div>
    );
};

export default SliderOne;