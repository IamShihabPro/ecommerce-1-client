import React, { useState } from 'react';

const categories = ['Electronics', 'Clothing', 'Home', 'Books']; // Sample categories
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White']; // Sample colors

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productRating, setProductRating] = useState('');
  const [productImage, setProductImage] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productCategory">
              Product Category
            </label>
            <select
              id="productCategory"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
              Product Price
            </label>
            <input
              type="number"
              id="productPrice"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productRating">
              Product Rating
            </label>
            <input
              type="number"
              id="productRating"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={productRating}
              onChange={(e) => setProductRating(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
              Product Image URL
            </label>
            <input
              type="text"
              id="productImage"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productColors">
              Product Colors
            </label>
            <select
              id="productColors"
              multiple
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={selectedColors}
              onChange={(e) => setSelectedColors(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productDescription">
            Product Description
          </label>
          <textarea
            id="productDescription"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
