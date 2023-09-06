import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaSitemap, FaUsers } from 'react-icons/fa';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Loader/Loader';

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const toogleSidebar = ()=>{
        setOpen(!open)
    }

    const {user, loading} = useContext(AuthContext)

    // const isAdmin = true
    const [isAdmin] = useAdmin();
    
    if(loading){
      return <Loader></Loader>
  }
  
    return (
        <div className='h-screen flex items-end justify-end'>

            <button onClick={toogleSidebar} className='fixed lg:hidden z-90 top-10 left-0 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300'>
                <span>
                    <FaBars className='w-6'></FaBars>
                </span>
            </button>

            <div className={`${open ? 'w-48' : 'w-0'} lg:w-64 bg-teal-800 h-screen relative duration-300`}>
                <div className=' justify-center mt-3'>
                    <h1 className={`text-white font-medium taxt-4xl text-center duration-200 ${!open && 'invisible'}`}>Hexashop</h1>
                </div>

                {/* menu here */}

                <ul className='pt-6'>
                    {
                        isAdmin ? <>

                        <button onClick={toogleSidebar} className='fixed lg:hidden z-90 top-10 left-0 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300'>
                            <span>
                                <FaBars className='w-6'></FaBars>
                            </span>
                        </button>

                        <div className='mt-10'>
                        <Link to='/dashboard/adminhome' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <FaHome></FaHome> <span>Admin Home </span></Link>
                        <Link  to='/dashboard/addProduct' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <FaShoppingCart></FaShoppingCart>  <span> Add Product </span></Link>
                        <Link  to='/dashboard/manageproduct' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <FaShoppingCart></FaShoppingCart> <span>  Manage Product </span></Link>
                        <Link  to='/dashboard/allusers' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <FaUsers></FaUsers> <span> All Users </span></Link>
                        <Link  to='/dashboard/mycart' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <FaShoppingCart></FaShoppingCart> <span> My Cart </span></Link>
                 
                        </div>
                        
                        </> : 
                        <>
                         <button onClick={toogleSidebar} className='fixed lg:hidden z-90 top-10 left-0 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300'>
                            <span>
                                <FaBars className='w-6'></FaBars>
                            </span>
                        </button>

                        <div className='mt-10'>
                        <Link to='/dashboard/mycart' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <FaShoppingCart></FaShoppingCart> <span>Mycart </span></Link>
                        <Link to='/' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <FaHome></FaHome> <span>Home </span></Link>

                        </div>
                        
                        </>
                    }
                   
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;