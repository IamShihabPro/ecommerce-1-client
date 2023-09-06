import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useCart from '../../hooks/useCart';

const Nabvbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut, theme, setTheme} = useContext(AuthContext)

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
        link: '/review',
        title: 'Review'
    }
]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
};

useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
}, [theme]);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err => console.log(err) )
  }


  return (
    <nav className="bg-gray-900 fixed top-0 inset-x-0 z-50">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
            <div className='flex items-center justify-between h-16'>
                <div className=''>
                    <h1 className='text-gray-200 font-bold text-3xl'>Hexa Shop</h1>
                </div>

                <div className='hidden md:block lg:block'>
                    <div className="ml-10 flex items-baseline space-x-4">
                        {
                            navItems.map(({id, link, title})=> (
                                <Link to={link}  key={id} className="text-gray-200 hover:text-blue-500 hover:scale-105 px-3 py-2 rounded-md font-medium text-base">
                                {title}
                                </Link>
                            ))
                        }

                        {
                            user&& <>
                                <Link to='/dashboard/mycart' className="text-gray-200 hover:text-blue-500 hover:scale-105 rounded-md text-sm font-medium flex items-center"> <FaShoppingCart className='w-14' ></FaShoppingCart> <sup className='-ml-5 text-sm'> +{cart?.length || 0} </sup> </Link> 
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

                <div className='hidden md:block lg:block'>
                         <label className="swap swap-rotate ">
  
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox"  onChange={handleToggle}
                                    // show toggle image based on localstorage theme
                                    checked={theme === "light" ? false : true} />
                            
                            {/* sun icon */}
                            <svg className="swap-on fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            
                            {/* moon icon */}
                            <svg className="swap-off fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                            
                        </label>
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
                                <Link to='/dashboard/mycart' className="text-sky-400 hover:text-blue-500 hover:scale-105 rounded-md text-sm font-medium flex items-center py-3 "> <FaShoppingCart className='w-14' ></FaShoppingCart> <sup className='-ml-5 text-sm'> +{cart?.length || 0} </sup> </Link> 
                                {/* <Link to='/dashboard' className="text-sky-400 hover:text-blue-500 hover:scale-105 rounded-md text-sm font-medium py-3 ">Dashboard</Link>  */}
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

                <div className='ml-2'>
                         <label className="swap swap-rotate ">
  
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox"  onChange={handleToggle}
                                    // show toggle image based on localstorage theme
                                    checked={theme === "light" ? false : true} />
                            
                            {/* sun icon */}
                            <svg className="swap-on fill-current text-sky-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            
                            {/* moon icon */}
                            <svg className="swap-off fill-current text-sky-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                            
                        </label>
                </div>

            </div>

        </div>
    </nav>
  );
};

export default Nabvbar;