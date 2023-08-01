import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nabvbar = () => {
  const [isOpen, setIsOpen] = useState(false);


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
    },
    {
        id: 4,
        link: '/login',
        title: 'Login'
    },
]

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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
                            <Link to={link} key={id} className="block text-sky-400 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                            {title}
                            </Link> 
                        ))
                    }
                </div>

            </div>

        </div>
    </nav>
  );
};

export default Nabvbar;