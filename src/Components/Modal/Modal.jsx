import React, { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from "../../hooks/useAuth";

const Modal = ({product, handleAddToCart, setItemColor, setItemSize}) => {
    const {colors, sizes, name} = product
  const [showModal, setShowModal] = useState(false);
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');

  const {theme} = useAuth()

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const color = form.productColor.value;
    const size = form.productSize.value;
    setItemColor(color)
    setItemSize(size)

    console.log('color size', color, size);
    console.log('color size 2', productColor, productSize);
  }



  return (
    <>
      <button
        className={`px-6 py-2 mt-1 rounded shadow font-semibold outline-none focus:outline-none mb-1 hover:scale-105 ${theme === 'dark' ? 'text-gray-800 bg-white border' : 'text-white bg-gray-800'}`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add To Card
      </button>
      {showModal ? (
        <>
          <div  className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-xl duration-150" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-300 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-gray-950 rounded-t ">
                  <h3 className="text-xl font=semibold"> {name} </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-blue-600 opacity-7 h-6 w-6 text-xl block py-0 ml-3 rounded-full">
                     <AiFillCloseCircle></AiFillCloseCircle>
                    </span>
                  </button>
                </div>
                <div className="relative p-6 text-white flex-auto">

                    {/* ------ */}

                    <form onSubmit={handleSubmit}>

                    {/* Product Color */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productColor">
                        Product Color
                        </label>
                        <select
                        id="productColor"
                        name="productColor"
                        className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-blue-500"
                        value={productColor}
                        onChange={(e) => setProductColor(e.target.value)}
                        >
                        <option value="" disabled >Select a Color</option>
                        {colors.map((color, i) => (
                            <option key={i+1}  value={color.value}>
                            {color.label}
                            </option>
                        ))}
                        </select>
                    </div>


                    {/* Product Size */}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productSize">
                        Product Size
                        </label>
                        <select
                        id="productSize"
                        name="productSize"
                        className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-blue-500"
                        value={productSize}
                        onChange={(e) => setProductSize(e.target.value)}
                        >
                        <option value="" disabled >Select a Size</option>
                        {sizes.map((size, i) => (
                            <option key={i+1}  value={size.value}>
                            {size.label}
                            </option>
                        ))}
                        </select>
                    </div>



                    <button onClick={()=> handleAddToCart(product, productColor, productSize)} className="btn btn-xs text-black bg-white hover:bg-white shadow-md">Add to card</button>
                    {/* <button type="submit" className="btn btn-outline btn-sm bg-white shadow-md">Add to card</button> */}



                    </form>

                   

                    

                </div>

              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;