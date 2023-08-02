import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaEye } from 'react-icons/fa';

const ShopCard = ({product}) => {
    return (
        <>
        <div  key={product.id} className='col-span-1 cursor-pointer group bg-white drop-shadow-md rounded-md p-2 my-2 mx-3'>
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

                            <div className='flex justify-between items-center mt-1'>
                                <button className="btn btn-outline">Add to card</button>
                                <button className="btn "><FaEye></FaEye></button>
                            </div>
                        </div>
                    </div>
            
        </>
    );
};

export default ShopCard;