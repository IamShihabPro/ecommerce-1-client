import React from 'react';
import { Rating } from '@smastrom/react-rating'

const MultiCard = ({product}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
               
                        <div className='col-span-1 cursor-pointer group bg-white drop-shadow-md rounded-md p-2'>
                        <div className='flex flex-col gap-2 w-full'>
                        <div className=' aspect-square w-full relative overflow-hidden rounded-md'>
                            <img className=' object-cover h-full w-full group-hover:scale-110 transition'
                            src={product.image}
                            alt='Cloths'/>
                            <div className='absolute top-3 right-3'>
                           
                            </div>
            
                        </div>
            
                        <div className='font-semibold text-lg'>{product.name}</div> 
                        <div className='hidden'>{product.category}</div> 
                        <div className='font-light text-neutral-700'>
                            {product.description}
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='font-semibold'>$ {product.price}</div>
                            <div>
                            <Rating style={{ maxWidth: 70 }} value={product.ratings} readOnly />
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
    );
};

export default MultiCard;