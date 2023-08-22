import React, { useContext, useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../hooks/useCart';

const Nabvbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut} = useContext(AuthContext)

    const [cart] = useCart()

    // console.log(cart.length);

  const navItems = [
    {
        id: 1,
        link: '/',
        title: 'Home'
    },
    {
        id: 2,
        link: '/shop',
        title: 'Shop'
    },
    {
        id: 3,
        link: '/contact',
        title: 'Contact'
    }
]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err => console.log(err) )
  }


  return (
    <nav className="bg-gray-100 fixed top-0 inset-x-0 z-50">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
            <div className='flex items-center justify-between h-16'>
                <div className=''>
                    <h1 className='text-gray-600 font-bold text-3xl'>Hexa Shop</h1>
                </div>

                <div className='hidden md:block lg:block'>
                    <div className="ml-10 flex items-baseline space-x-4">
                        {
                            navItems.map(({id, link, title})=> (
                                <Link to={link}  key={id} className="text-gray-600 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md font-medium text-base">
                                {title}
                                </Link>
                            ))
                        }

                        {
                            user&& <>
                                <Link to='/dashboard' className="text-gray-600 hover:text-blue-500 hover:scale-105 rounded-md text-sm font-medium flex items-center"> <FaShoppingCart className='w-14' ></FaShoppingCart> <sup className='-ml-5 text-sm'> +{cart?.length || 0} </sup> </Link> 
                                {/* <Link to='/dashboard' className="text-gray-600 hover:text-blue-500 hover:scale-105 rounded-md text-sm font-medium px-3">Dashboard</Link>  */}
                            </>  
                        }

                        {/* <span className='relative'>
                                <Link className="absolute -mt-5 -ml-8 p-5 text-gray-600 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md font-medium text-base">
                                    <FaShoppingCart className='w-10'></FaShoppingCart> <sup className='absolute mt-2 ml-5'> +{cart?.length || 0} </sup>
                                </Link>
                        </span> */}


                        {
                            user ? <> 
                            <Link  onClick={handleLogOut} className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ml-2">Logout</Link>       
                             </> : <> <Link to='/login' className="text-red-500 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ml-4"> Login </Link> </>

                             
                        }

                       
                    </div>
                </div>

                <div className='-mr-2 flex md:hidden'>
                    <button onClick={toggleNavbar} type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out' aria-label="Toggle navigation">
                    {
                        isOpen ? (
                        <FaTimes className="h-6 w-6" />) : 
                        (<FaBars className="h-6 w-6" /> )
                    }
                    </button>

                </div>

            </div>


            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden `}>
                <div>
                    {
                        navItems.map(({id, link, title})=>(
                            <Link to={link} key={id} className="block text-sky-400 hover:text-white px-3 py-3 rounded-md text-base font-medium">
                            {title}
                            </Link> 
                        ))
                    }

                        {
                            user&& <>
                                <Link to='/cart' className="text-sky-400 hover:text-blue-500 hover:scale-105 rounded-md text-sm font-medium flex items-center py-3 "> <FaShoppingCart className='w-14' ></FaShoppingCart> <sup className='-ml-5 text-sm'> +{cart?.length || 0} </sup> </Link> 
                                <Link to='/dashboard' className="text-sky-400 hover:text-blue-500 hover:scale-105 rounded-md text-sm font-medium py-3 ">Dashboard</Link> 
                            </>  
                        }

                        {/* <span className='relative ml-3'>
                                <Link className="absolute -mt-1 -mr-5 p-5 block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                                    <FaShoppingCart> </FaShoppingCart> <sup className='absolute mt-2 ml-5'> +{cart?.length || 0} </sup>
                                </Link>
                        </span> */}

                    {
                            user ? <> 
                            <Link  onClick={handleLogOut} className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium ">Logout</Link>       
                             </> : <> <Link to='/login' className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium "> Login </Link> </>

                             
                    }
                </div>

            </div>

        </div>
    </nav>
  );
};

export default Nabvbar;