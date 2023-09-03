import { Rating } from '@smastrom/react-rating';
import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Modal from '../Modal/Modal';

const Card = ({product}) => {
    // style={{ minWidth: '320px' }}
    const {_id, name, image, description, price, category, sizes, colors, ratings} = product

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const [itemColor, setItemColor] = useState('')
    const [itemSize, setItemSize] = useState('')

    const [refetch, isLoading] = useCart()

    const handleAddToCart = (product, productColor, productSize) =>{
        console.log(product);

        if(user && user.email){
            const orderProduct = {productId : _id, name, category,image , price, description, sizes, colors, ratings, email: user.email, productColor: productColor, productSize: productSize}
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
        <>
            <div  key={_id} className='col-span-1 cursor-pointer group bg-white drop-shadow-md rounded-md p-2 my-2 mx-3' style={{ minWidth: '320px' }}>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className=' aspect-square w-full relative overflow-hidden rounded-md'>
                                <img className=' object-cover h-full w-full group-hover:scale-110 transition'
                                src={image}
                                alt='Cloths'/>
                                <div className='absolute top-3 right-3'>
                            
                                </div>
                
                            </div>
                
                            <div className='font-semibold text-lg'>{name}</div>

                            <div className='font-light text-neutral-700'>
                                {description}
                            </div>

                            <div className='flex flex-row items-center justify-between'>
                                <div className='font-semibold'>$ {price}</div>
                                <div>
                                <Rating style={{ maxWidth: 70 }} value={ratings} readOnly />
                                </div>
                            </div>

                            <div className='flex justify-between items-center mt-1'>
                                {/* <button onClick={()=> handleAddToCart(product)} className="btn btn-outline btn-sm  shadow-md">Add to card</button> */}
                                <Modal product={product} handleAddToCart={handleAddToCart} itemColor={itemColor} setItemColor={setItemColor} setItemSize={setItemSize} ></Modal>

                                <Link  to={`/productview/${_id}`}> <button className="btn btn-sm text-blue-600 bg-white shadow-md"> <FaEye></FaEye>  </button> </Link>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default Card;