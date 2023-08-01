import React from 'react';

const Cards = () => {
    return (
        <div className="container pb-16 mt-10">
        <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>Mens Feshion</h2>

        <div className='grid grid-cols-4 gap-6'>
            <div className='bg-white shadow rounded overflow-hidden group'>
                <div className="relative">
                    <img src="https://img.freepik.com/free-photo/front-view-smiley-woman-pointing-herself_23-2148946299.jpg?w=740&t=st=1690678996~exp=1690679596~hmac=81163f8c4173e6bb4b1fd431af32631a383ec9c75b7c571641f5517385726f54" className='w-full' alt="" />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="" className='text-white text-lg w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition'>
                            <FaEye></FaEye>
                        </a>
                        <a href="" className='text-white text-lg w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition'>
                            <FaShoppingCart></FaShoppingCart>
                        </a>
                    </div>
                </div>

                <div className='pt-4 pb-3 px-4'>
                    <a href="">
                        <h2 className='font-medium text-lg text-gray-800 hover:text-red-600'>Jeans</h2>
                    </a>

                    <div className='flex items-baseline mb-1 space-x-2'>
                        <p className='text-xl text-red-600 font-semibold'>Price 159</p>
                        <p className='text-xl text-red-600 font-semibold'>Ratings</p>
                    </div>
                </div>
                <button className='btn block w-full py-1 text-center text-white bg-red-600 border-red-600 rounded-none rounded-b transition hover:bg-white hover:text-red-600 hover:border-red-600'>Add to Cart</button>
            </div>
        </div>
       </div>
    );
};

export default Cards;