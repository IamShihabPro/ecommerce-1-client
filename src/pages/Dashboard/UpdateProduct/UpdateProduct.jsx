import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData()
    console.log(product);
    return (
        <div>
            <h2>Update Product</h2>
            
        </div>
    );
};

export default UpdateProduct;