import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Container from '../Container/Container';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProductView = () => {
    const product = useLoaderData()
    const {colors, sizes} = product
    const {theme} = useAuth()
    // console.log(colors);

    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8'>
                <div>
                    <img src={product.image} alt={product.name} className='w-full' />
                    {/* <div className='grid grid-cols-5 gap-4 mt-4'> </div> */}
                </div>

                {/* product content */}
                <div>
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white ' : 'text-gray-800 '} `}>{product.name}</h2>
                    <div className='my-2'>
                        <Rating style={{ maxWidth: 70 }} value={product.ratings} readOnly />
                    </div>

                    <p className={` my-1 font-semibold text-lg ${theme === 'dark' ? 'text-white ' : 'text-gray-700 '} `}>Category: {product.category}</p>
                    <p className={` my-1 font-semibold text-lg ${theme === 'dark' ? 'text-white ' : 'text-gray-700 '} `}> {product.description}</p>
                    <p className={`text-lg font-medium my-1 ${theme === 'dark' ? 'text-blue-500 ' : 'text-red-600 '}`}>Price: ${product.price}</p>


                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-2 my-3'>
                        {
                            colors.map((color, i) => (
                                <div key={i} className={`border p-2 rounded text-center shadow-md ${theme === 'dark' ? 'text-blue-600 ' : 'text-red-600 '} `}>
                                    {color.label}
                                </div>
                            ) )
                        }
                    </div>

                    <div className='flex gap-2'>
                        {
                            sizes.map((size, i) => (
                                <div key={i} className={`border p-2 rounded shadow-md  ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'} `}>
                                    {size.label}
                                </div>
                            ) )
                        }
                    </div>

                </div>

            </div>
        </Container>
    );
};

export default ProductView;