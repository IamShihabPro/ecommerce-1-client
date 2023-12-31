import React, { useContext, useEffect, useState } from 'react';

import Container from '../../Components/Container/Container';
import ShopCard from './ShopCard';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../../Components/Loader/Loader';

const ShopPage = () => {
    const {theme} = useAuth()
    const {loading} = useContext(AuthContext)
    
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    // const [categoryFilter, setCategoryFilter] = useState('all');
    const [minPriceFilter, setMinPriceFilter] = useState(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState(100);
    // const [sizeFilter, setSizeFilter] = useState('all');
    // const [colorFilter, setColorFilter] = useState('all');
  
    if(loading){
        return <Loader></Loader>
    }


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
        // console.log(c);
        setSelectedCategory(c);
      };



  
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
            const result = await response.json();
            setProducts(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [])
    
    // console.log('products', products);

    const handleFilter = () => {
        const filteredProduct = products.filter(product => {
          return (
            (selectedCategory === 'All' || product.category === selectedCategory) &&
            product.price >= minPriceFilter &&
            product.price <= maxPriceFilter 
            // &&
            // (sizeFilter === 'all' || product.size === sizeFilter) &&
            // (colorFilter === 'all' || product.color === colorFilter)
          );
        });
        
        // console.log('filteredProduct', filteredProduct);
        return filteredProduct;
      };
    
      const filteredProducts = handleFilter();
    //   console.log('filter', filteredProducts);

    // const filterProduct = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory)
    // console.log(filterProduct);

    return (
        <Container>
            
            <h2 className={` text-center text-3xl font-medium my-3 mt-20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Shop By Category</h2>
            {/* shop page wrapper */}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 pt-4 pb-16'>
                
                {/* sidebar */}

                <div className={`col-span-1 px-4 pb-6 rounded overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    <div className={`divided-y divide-gray-200  py-2 px-2 space-y-5 shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                        {/* category filter */}
                        <div className=''>
                            <h3 className={`text-xl mb-3 uppercase font-medium mt-4 px-2 ${theme === 'dark' ? 'text-white' : 'text-black'} `}>Category</h3>
                            {/* single Category */}

                            <div className='mt-8 mb-8 flex flex-col justify-center text-blue-500'>

                                <button onClick={()=> handleCategory('All')} className={`p-2 ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-white'}`}>All</button>
                                {
                                    categories.map(category => (
                                        <button key={category.id} onClick={()=> handleCategory(category.category)} className={`p-2 ${selectedCategory === `${category.category}` ? 'bg-blue-500 text-white' : 'bg-white'}`}>{category.category}</button>
                                    ))
                                }

                            </div>

                            <hr />

                             {/* Price Range Filter */}
                                <div className="flex flex-col gap-6 items-center ">
                                <label className="mr-2 mt-4 font-medium">Price Range:</label>
                                <div className=''>
                                    <span>${minPriceFilter}</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        className="w-40 mx-2 "
                                        value={minPriceFilter}
                                        onChange={e => setMinPriceFilter(parseInt(e.target.value))}
                                    />
                                </div>

                                <div>
                                    <span>${maxPriceFilter}</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        className="w-40 mx-2"
                                        value={maxPriceFilter}
                                        onChange={e => setMaxPriceFilter(parseInt(e.target.value))}
                                    />
                                </div>
                                </div>


                            
                        </div>

                    </div>
                </div>
                 {/* sidebar end */}

                 {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                    {
                        filteredProducts.map(product => <MultiCard key={product.id} product={product} ></MultiCard>)
                    }
                
                </div> */}

                <div className='col-span-3'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>
                        {
                            filteredProducts.slice(0,15).map(product => <ShopCard key={product._id} product={product} ></ShopCard>)
                        }
                    </div>

                </div>






            </div>
            
        </Container>
    );
};

export default ShopPage;