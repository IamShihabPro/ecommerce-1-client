import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import useAuth from '../../hooks/useAuth';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

const ProductData = () => {
    const {theme} = useAuth()

    
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const {user, loading} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const [refetch, isLoading] = useCart()

    const [itemColor, setItemColor] = useState('')
    const [itemSize, setItemSize] = useState('')

 
          
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
    



    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_API_URL}/products`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data)
    //     })
    //     .catch(error => {
    //         console.error('Error fetching products:', error);
    //     });
    // },[products])


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

      
    //  category button dynamic
    const handleCategory = (c) => {
        console.log(c);
        setSelectedCategory(c);
      };




    // console.log(products);

    const filterProduct = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory)
    // console.log(filterProduct);



    
    const handleAddToCart = (product, productColor, productSize) =>{
        console.log(product);
        const {_id, name, image, description, price, category, sizes, colors, ratings} = product

        if(user && user.email){
            const orderProduct = {productId : _id, name, category,image , price, description, sizes, colors, ratings , email: user.email, productColor: productColor, productSize: productSize}
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





    // pagination
    const itemsPerPage = 20;
        const [currentPage, setCurrentPage] = useState(1);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const visibleProducts = filterProduct.slice(startIndex, endIndex);

        const totalPages = Math.ceil(filterProduct.length / itemsPerPage);

        const handleNextPage = () => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            }
            };

        const handlePrevPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        };


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
                    visibleProducts.map(product =>(

                        <div  key={product._id} className='col-span-1 cursor-pointer group bg-white drop-shadow-md rounded-md p-2'>
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
                        <div className='flex justify-between items-center mt-1'>
                                {/* <button onClick={()=> handleAddToCart(product)} className="btn btn-outline btn-sm shadow-md">Add to card</button> */}

                                <Modal product={product} handleAddToCart={handleAddToCart} itemColor={itemColor} setItemColor={setItemColor} setItemSize={setItemSize} ></Modal>

                                <Link  to={`/productview/${product._id}`}> <button className="btn btn-sm text-blue-600 bg-white shadow-md"> <FaEye></FaEye>  </button> </Link>
                                
                            </div>
                        </div>
                    </div>

                    ))
                }

            </div>


            <div className="pagination flex gap-2 mt-10 text-center items-center justify-center">
                <button className='border-solid border-2 border-indigo-600 p-1 text-indigo-600' onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? 'active border-solid border-2 border-indigo-600 p-1' : 'text-gray-500'}
                    >
                    {index + 1}
                    </button>
                ))}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="ellipsis">...</span>
                )}
                {totalPages > 5 && currentPage < totalPages - 1 && (
                    <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                )}
                <button className='border-solid border-2 border-indigo-600 p-1 text-indigo-600' onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>


        </div>
    );
};

export default ProductData;