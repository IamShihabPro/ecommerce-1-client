import React, { useState } from 'react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const categories = ['Mens', 'Womens', 'Kids']; // Sample categories

const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
    // Add more color options as needed
  ];

  const sizeOptions = [
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
    // Add more color options as needed
  ];

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productRating, setProductRating] = useState('');
  const [productImage, setProductImage] = useState('');
  const [colors, setSelectedColors] = useState([]);
  const [sizes, setSelectedSize] = useState([]);
  const [productDescription, setProductDescription] = useState('');

  const [axiosSecure] = useAxiosSecure()

  const handleColorChange = (selectedOptions) => {
    setSelectedColors(selectedOptions);
    // console.log(selectedOptions);
  };

  const handleSizeChange = (selectedOptions) => {
    setSelectedSize(selectedOptions);
    // console.log(selectedOptions);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    
    const form = e.target;
    const name = form.productName.value;
    const category = form.productCategory.value;
    const price = form.productPrice.value;
    const ratings = form.productRating.value;
    // const colors = form.colors.value;
    const description = form.productDescription.value;
    const image = form.productImage.value;

    
    const product = {name,category, price : parseFloat(price) ,image, ratings, description, colors, sizes};
    console.log(product);

    axiosSecure.post('/products',product)
    // .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product Added Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    
  };


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded drop-shadow-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-10">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Category
            </label>
            <select
              id="productCategory"
              name="productCategory"
              className="w-full border rounded text-sm  py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option  value="" disabled >Select a category</option>
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
              name="productPrice"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
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
              name="productRating"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
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
              name="productImage"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>









          <div className="mb-4">
      <div className="w-64">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Select Colors
            </label>
        <Select
          className='text-sm'
          options={colorOptions}
          isMulti
          value={colors}
          onChange={handleColorChange}
        />
      </div>
      {/* <h2 className="text-lg font-semibold mt-6">Selected Colors:</h2> */}
      <ul className="list-disc ml-6 mt-2 grid grid-cols-3 justify-between">
        {colors.map((color) => (
          <li key={color.value}>{color.label}</li>
        ))}
      </ul>
    </div>



          <div className="mb-10">
      <div className="w-64">
        <label className="block mb-1 text-gray-700 text-sm font-bold">Select Size:</label>
        <Select
          className='text-sm'
          options={sizeOptions}
          isMulti
          value={sizes}
          onChange={handleSizeChange}
        />
      </div>
      {/* <h2 className="text-lg font-semibold mt-6">Selected Size</h2> */}
      <ul className="list-disc ml-6 mt-2 flex justify-between">
        {sizes.map((color) => (
          <li key={color.value}>{color.label}</li>
        ))}
      </ul>
    </div>












        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productDescription">
            Product Description
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-white"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white text-sm rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
