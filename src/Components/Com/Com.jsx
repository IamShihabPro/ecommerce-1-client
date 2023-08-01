// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Container from '../Container/Container';
// import { FaEye, FaShoppingCart } from 'react-icons/fa';

// const ProductSlider = () => {
//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 6,
//           },
//           tablet: {
//             breakpoint: { max: 1024, min: 768 },
//             items: 2,
//           },
//           mobile: {
//             breakpoint: { max: 767, min: 0 },
//             items: 1,
//           },
//       };


//     const [productSlider, setProductSlider] = useState([])
//     const [mensProducts, setMensProducts] = useState('Mens')

//     useEffect(()=>{
//         fetch('shops.json')
//         .then(res => res.json())
//         .then(data =>{
//             setProductSlider(data)
//         })
//     },[])

//     //  console.log(productSlider);

//     const mensfilterSlider = productSlider.filter(menProduct => menProduct.category === mensProducts )
//     console.log(mensfilterSlider);
        
//     return (
//         <Container className='mt-10'>
            
//             <h2 className='text-2xl font-medium text-gray-700 uppercase mb-6 mt-16 ml-4'>Mens Feshion</h2>
//              <Carousel className='mt-10 flex justify-center items-center mx-auto' responsive={responsive}>
//                 {
//                     mensfilterSlider.map(menFilter => (
//                         <div className='bg-white shadow rounded overflow-hidden flex flex-col justify-between group mx-2'>
//                         <div className="relative">
//                             <img src={menFilter.image} className='w-full object-cover h-52 transition' alt="" />
                            
//                             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in">
//                                 <button className='text-white text-lg w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition'>
//                                     <FaEye></FaEye>
//                                 </button>
//                                 <button className='text-white text-lg w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition'>
//                                     <FaShoppingCart></FaShoppingCart>
//                                 </button>
//                             </div>
//                         </div>
        
//                         <div className='pt-4 pb-3 px-4'>
                            
//                                 <h2 className='font-medium text-lg text-gray-800 hover:text-red-600'>{menFilter.name}</h2>
                            
        
//                             <div className='flex items-baseline mb-1 space-x-2'>
//                                 <p className='text-gray-800 font-semibold'>Price: ${menFilter.price} </p>
//                                 {/* <p className='text-xl text-red-600 font-semibold'>Ratings</p> */}
//                             </div>
//                         </div>
//                         <button className='btn block w-full py-1 text-center text-white bg-red-600 border-red-600 rounded-none rounded-b transition duration-300 ease-in hover:bg-white hover:text-red-600 hover:border-red-600'>Add to Cart</button>
//                     </div>
//                     ))
//                 }
//             </Carousel>
            
//         </Container>
//     );
// };

// export default ProductSlider;