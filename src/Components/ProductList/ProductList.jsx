import React, { useState, useEffect } from 'react';
import jsonData from '../../../public/shops.json'; // Assuming products.json is in the same folder as this component
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating data fetch from products.json
    // In a real application, you would use an HTTP request or a data fetching library.
    setProducts(jsonData);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="mt-8 mb-4 flex justify-center space-x-4">
        <button
          onClick={() => handleCategoryClick('All')}
          className={`p-2 ${
            selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('Mens')}
          className={`p-2 ${
            selectedCategory === 'Mens' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Mens
        </button>
        <button
          onClick={() => handleCategoryClick('Womens')}
          className={`p-2 ${
            selectedCategory === 'Womens' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Womens
        </button>
        <button
          onClick={() => handleCategoryClick('Kids')}
          className={`p-2 ${
            selectedCategory === 'Kids' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Kids
        </button>
        {/* Add more Womensuttons */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.slice(0,12).map((product) => (
        

            <div  key={product.id} className='col-span-1 cursor-pointer group bg-slate-100 rounded-md p-2'>
            <div className='flex flex-col gap-2 w-full'>
            <div className=' aspect-square w-full relative overflow-hidden rounded-md'>
                <img className=' object-cover h-full w-full group-hover:scale-110 transition'
                src={product.image}
                alt='Cloths'/>
                <div className='absolute top-3 right-3'>
                {/* <HeartButton /> */}
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



        ))}
      </div>
    </div>
  );
};

export default ProductList;
