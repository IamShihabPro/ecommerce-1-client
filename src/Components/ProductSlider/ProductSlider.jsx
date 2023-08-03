import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Container from '../Container/Container';
import Card from './Card';

const ProductSlider = () => {
    const [productSlider, setProductSlider] = useState([])
    const [mensProducts, setMensProducts] = useState('Mens')
    const [womensProducts, setWomensProducts] = useState('Womens')
    const [kidsProducts, setKidsProducts] = useState('Kids')

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/products`)
        .then(res => res.json())
        .then(data =>{
            setProductSlider(data)
        })
    },[])

    //  console.log(productSlider);

    const mensfilterSlider = productSlider.filter(menProduct => menProduct.category === mensProducts )
    console.log(mensfilterSlider);

    const womensfilterSlider = productSlider.filter(womenProduct => womenProduct.category === womensProducts )
    console.log(womensfilterSlider);

    const kidsfilterSlider = productSlider.filter(kidProduct => kidProduct.category === kidsProducts )
    console.log(kidsfilterSlider);

    return (
        <Container>
             <h2 className='text-2xl font-medium text-gray-700 uppercase mb-6 mt-16 ml-4'>Mens Feshion</h2>
            <div className="flex overflow-x-auto my-4">
                {mensfilterSlider.map((product) => <Card key={product._id} product={product}></Card> )}
            </div>

             <h2 className='text-2xl font-medium text-gray-700 uppercase mb-6 mt-16 ml-4'>Womens Feshion</h2>
            <div className="flex overflow-x-auto my-4">
                {womensfilterSlider.map((product) => <Card key={product._id} product={product}></Card> )}
            </div>

             <h2 className='text-2xl font-medium text-gray-700 uppercase mb-6 mt-16 ml-4'>Kids Feshion</h2>
            <div className="flex overflow-x-auto my-4">
                {kidsfilterSlider.map((product) => <Card key={product._id} product={product}></Card> )}
            </div>
                    
        </Container>
    );
};

export default ProductSlider;