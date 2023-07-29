import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductData = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');


    // category name of product
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data =>{
            setCategories(data);
        })
    },[])

    //  category button dynamic
    const handleCategory = (c) => {
        console.log(c);
        setSelectedCategory(c);
      };



    useEffect(()=>{
        fetch('shops.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    console.log(products);

    const filterProduct = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory)
    console.log(filterProduct);


    return (
        <div className="container mx-auto px-4">
            <div className='mt-8 mb-8 flex justify-center space-x-4'>
                <button onClick={()=> handleCategory('All')} className={`p-2 ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
                {
                    categories.map(category => (
                        <button key={category.id} onClick={()=> handleCategory(category.category)} className={`p-2 ${selectedCategory === `${category.category}` ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{category.category}</button>
                    ))
                }
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {
                    filterProduct.slice(0,15).map(product =>(

                        <div  key={product.id} className='col-span-1 cursor-pointer group bg-slate-100 rounded-md p-2'>
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

                    ))
                }

            </div>
        </div>
    );
};

export default ProductData;