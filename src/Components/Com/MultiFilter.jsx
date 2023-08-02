import React, { useEffect, useState } from 'react';
import MultiCard from './MultiCard';

 

const MultiFilter = () => {
    const [productsData, setProducts] = useState([]);
    useEffect(()=>{
        fetch('shops.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])


    const [categoryFilter, setCategoryFilter] = useState('all');
    const [minPriceFilter, setMinPriceFilter] = useState(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState(100);
    const [sizeFilter, setSizeFilter] = useState('all');
    const [colorFilter, setColorFilter] = useState('all');
  
    // Function to handle filtering based on all filter options
    const handleFilter = () => {
      const filteredProducts = productsData.filter(product => {
        return (
          (categoryFilter === 'all' || product.category === categoryFilter) &&
          product.price >= minPriceFilter &&
          product.price <= maxPriceFilter &&
          (sizeFilter === 'all' || product.size === sizeFilter) &&
          (colorFilter === 'all' || product.color === colorFilter)
        );
      });
  
      return filteredProducts;
    };
  
    const filteredProducts = handleFilter();
  

  return (
    <div>
      <div className="flex mb-4">
        {/* Category Filter */}
        <select
          className="px-2 py-1 border rounded mr-2"
          onChange={e => setCategoryFilter(e.target.value)}
          value={categoryFilter}
        >
          <option value="all">All Categories</option>
          <option value="Mens">Men</option>
          <option value="Womens">Women</option>
          <option value="Kids">Kid</option>
        </select>

        {/* Price Range Filter */}
        <div className="flex items-center">
          <label className="mr-2">Price Range:</label>
          <span>${minPriceFilter}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            className="w-48 mx-2"
            value={minPriceFilter}
            onChange={e => setMinPriceFilter(parseInt(e.target.value))}
          />
          <span>${maxPriceFilter}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            className="w-48 mx-2"
            value={maxPriceFilter}
            onChange={e => setMaxPriceFilter(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredProducts.map(product => (
          <MultiCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            size={product.size}
            color={product.color}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiFilter;
