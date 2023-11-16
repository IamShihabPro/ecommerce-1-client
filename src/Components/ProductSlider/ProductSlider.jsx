import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Container from '../Container/Container';
import Card from './Card';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Loader/Loader';

const ProductSlider = () => {
    const {theme} = useAuth()
    const [productSlider, setProductSlider] = useState([])
    const [mensProducts, setMensProducts] = useState('Mens')
    const [womensProducts, setWomensProducts] = useState('Womens')
    const [kidsProducts, setKidsProducts] = useState('Kids')
    const {loading} = useContext(AuthContext)



    if(loading){
      return <Loader></Loader>
    }

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/products`)
        .then(res => res.json())
        .then(data =>{
            setProductSlider(data)
        })
    },[])

    //  console.log(productSlider);

    const mensfilterSlider = productSlider.filter(menProduct => menProduct.category === mensProducts )
    // console.log(mensfilterSlider);

    const womensfilterSlider = productSlider.filter(womenProduct => womenProduct.category === womensProducts )
    // console.log(womensfilterSlider);

    const kidsfilterSlider = productSlider.filter(kidProduct => kidProduct.category === kidsProducts )
    // console.log(kidsfilterSlider);

    return (
        <Container>
             <h2 className={`text-2xl font-medium text-gray-700 uppercase mb-6 mt-16 ml-4 ${theme === 'dark' ? 'text-slate-100' : 'text-black'}`}>Mens Feshion</h2>
            <div className="flex overflow-x-auto my-4">
                {mensfilterSlider.map((product) => <Card key={product._id} product={product}></Card> )}
            </div>

             <h2  className={`text-2xl font-medium text-gray-700 uppercase mb-6 mt-16 ml-4 ${theme === 'dark' ? 'text-slate-100' : 'text-black'}`}>Womens Feshion</h2>
            <div className="flex overflow-x-auto my-4">
                {womensfilterSlider.map((product) => <Card key={product._id} product={product}></Card> )}
            </div>

             <h2  className={`text-2xl font-medium text-gray-700 uppercase mb-6 mt-16 ml-4 ${theme === 'dark' ? 'text-slate-100' : 'text-black'}`}>Kids Feshion</h2>
            <div className="flex overflow-x-auto my-4">
                {kidsfilterSlider.map((product) => <Card key={product._id} product={product}></Card> )}
            </div>
                    
        </Container>
    );
};

export default ProductSlider;