import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Container from '../Container/Container';
import { useLoaderData } from 'react-router-dom';

const ProductView = () => {
    const product = useLoaderData()
    const {colors, sizes} = product
    console.log(colors);

    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8'>
                <div>
                    <img src={product.image} alt={product.name} className='w-full' />
                    {/* <div className='grid grid-cols-5 gap-4 mt-4'> </div> */}
                </div>

                {/* product content */}
                <div>
                    <h2 className='text-3xl font-bold'>{product.name}</h2>
                    <div className='my-2'>
                        <Rating style={{ maxWidth: 70 }} value={product.ratings} readOnly />
                    </div>

                    <p className='text-gray-800 font-semibold my-1'>Category: {product.category}</p>
                    <p className='text-gray-600 my-1'> {product.description}</p>
                    <p className='text-lg font-medium text-red-500  my-1'>Price: ${product.price}</p>

                    <div className='flex gap-2 my-3'>
                        {
                            colors.map(color => (
                                <div className={`border p-2 rounded text-red-600 shadow-md`}>
                                    {color.label}
                                </div>
                            ) )
                        }
                    </div>

                    <div className='flex gap-2'>
                        {
                            sizes.map(size => (
                                <div className='border p-2 rounded bg-red-600 text-white shadow-md'>
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