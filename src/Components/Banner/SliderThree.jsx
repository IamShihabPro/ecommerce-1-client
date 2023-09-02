import React from 'react';

const SliderThree = () => {
    return (
        <div name="Home" className='h-screen w-full bg-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row text-white pt-4'>
            <div className='flex flex-col justify-center h-full w-full'>
                <h2 className='text-3xl sm:text-4xl max-w-lg font-bold text-red-600'>Welcome To Hexashop </h2>

                <p className='py-4 text-gray-900 max-w-lg'>Find Your Valuable Product The One-stop Shopping Destination</p>
            </div>

            <div className='md:ml-4 -mt-10 sm:-mt-6 md:-mt-0 lg:-mt-0 xl:-mt-0 pl-2'>
                <img src='https://img.freepik.com/premium-photo/schoolboy-boy-jeans-shirt-goes-forward-back-school-isolated-white-background-vertical_120897-2365.jpg?w=360' alt="shihab" className='rounded-2xl mx-auto  md:w-96 lg:w-full w-2/3 md:ml-16'/>
            </div>
        </div>
    </div>
    );
};

export default SliderThree;