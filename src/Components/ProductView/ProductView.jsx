import React, { useContext, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Container from '../Container/Container';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const ProductView = () => {
    const product = useLoaderData()
    const {colors, sizes} = product
    const {theme} = useAuth()
    const {loading, user} = useContext(AuthContext)

    const [itemColor, setItemColor] = useState('')
    const [itemSize, setItemSize] = useState('')

    const [refetch, isLoading] = useCart()

    const navigate = useNavigate()
    const location = useLocation()



    if(loading){
      return <Loader></Loader>
    }

    
    if(user && user.email){
        const orderProduct = {productId : _id, name, category,image , price, description, sizes, colors, ratings, email: user.email, productColor: productColor, productSize: productSize}
        console.log(orderProduct);
        fetch(`${import.meta.env.VITE_API_URL}/carts`,{
            method:"POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(orderProduct)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                isLoading()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cart saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  refetch
            }
        })
    }

    const handleAddToCart = (product, productColor, productSize) =>{
        console.log(product);

        if(user && user.email){
            const orderProduct = {productId : _id, name, category,image , price, description, sizes, colors, ratings, email: user.email, productColor: productColor, productSize: productSize}
            console.log(orderProduct);
            fetch(`${import.meta.env.VITE_API_URL}/carts`,{
                method:"POST",
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(orderProduct)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    isLoading()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cart saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      refetch
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login First',
                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }

    }



    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-4'>
                <div>
                    <img src={product.image} alt={product.name} className='w-full sm:w-9/12 md:8/12 lg:8/12' />
                    {/* <div className='grid grid-cols-5 gap-4 mt-4'> </div> */}
                </div>

                {/* product content */}
                <div>
                    <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white ' : 'text-gray-800 '} `}>{product.name}</h2>
                    <div className='my-2'>
                        <Rating style={{ maxWidth: 70 }} value={product.ratings} readOnly />
                    </div>

                    <p className={` my-1 font-semibold text-lg ${theme === 'dark' ? 'text-white ' : 'text-gray-700 '} `}>Category: {product.category}</p>
                    <p className={` my-1 font-semibold text-lg ${theme === 'dark' ? 'text-white ' : 'text-gray-700 '} `}> {product.description}</p>
                    <p className={`text-lg font-medium my-1 ${theme === 'dark' ? 'text-blue-500 ' : 'text-red-600 '}`}>Price: ${product.price}</p>


                    <div>
                        <h1 className={`text-2xl font-bold p-2  mt-6 mb-6 ${theme === 'dark' ? 'text-white bg-blue-600' : 'text-white bg-red-500'}`}>Available Colors</h1>
                    </div>
                    <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-2 my-3'>
                        
                        {
                            colors.map((color, i) => (
                                <div key={i} className={`border p-2 rounded text-center shadow-md ${theme === 'dark' ? 'text-blue-600 ' : 'text-red-600 '} `}>
                                    {color.label}
                                </div>
                            ) )
                        }
                    </div>


                    <div>
                        <h1 className={`text-2xl font-bold p-2  mt-10 mb-6 ${theme === 'dark' ? 'text-white bg-blue-600' : 'text-white bg-red-500'}`}>Available Sizes</h1>
                    </div>

                    <div className='flex gap-2'>
                        {
                            sizes.map((size, i) => (
                                <div key={i} className={`border p-2 rounded shadow-md  ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'} `}>
                                    {size.label}
                                </div>
                            ) )
                        }
                    </div>

                    <div className='mt-10 '>
                        <Modal product={product} handleAddToCart={handleAddToCart} itemColor={itemColor} setItemColor={setItemColor} setItemSize={setItemSize} ></Modal>

                    </div>

                </div>

            </div>
        </Container>
    );
};

export default ProductView;