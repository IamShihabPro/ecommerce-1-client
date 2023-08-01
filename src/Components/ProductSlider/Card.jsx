import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { FaEye, FaShoppingCart } from 'react-icons/fa';

const Card = ({product}) => {
    // style={{ minWidth: '320px' }}
    return (
        <>
            <div  key={product.id} className='col-span-1 cursor-pointer group bg-white drop-shadow-md rounded-md p-2 my-2 mx-3' style={{ minWidth: '320px' }}>
                        <div className='flex flex-col gap-2 w-full'>
                        <div className=' aspect-square w-full relative overflow-hidden rounded-md'>
                            <img className=' object-cover h-full w-full group-hover:scale-110 transition'
                            src={product.image}
                            alt='Cloths'/>
                            <div className='absolute top-3 right-3'>
                           
                            </div>
            
                        </div>
            
                        <div className='font-semibold text-lg'>{product.name}</div>
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
        </>
    );
};

export default Card;