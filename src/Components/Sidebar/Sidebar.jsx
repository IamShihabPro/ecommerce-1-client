import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Loader/Loader';
import {  BsArrowLeftCircleFill } from 'react-icons/bs';
import { FaBars, FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaSitemap, FaUsers } from 'react-icons/fa';

import Hexashop from '../../assets/hexa.jpg'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const {user, loading} = useContext(AuthContext)

    // const isAdmin = true
    const [isAdmin] = useAdmin();
    
    if(loading){
      return <Loader></Loader>
  }
  
    return (
        <div className={`${open ? 'w-72' : 'w-20'} h-screen bg-gray-800 p-4 pt-8 relative duration-300`}>
                <BsArrowLeftCircleFill onClick={() => setOpen(!open)} className={`text-white w-6 h-6 cursor-pointer rounded-full absolute -right-2 top-9 border-2 border-gray-900 ${!open && 'rotate-180'}`}></BsArrowLeftCircleFill>

                <div className='flex gap-x-4 items-center'>
                    <img src={Hexashop} className={`cursor-pointer w-10 h-10 rounded-full duration-300`} alt="" />
                    <h1 className={`text-slate-200 origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Hexashop</h1>
                </div>
                <div>
                    
                <ul>

                    {
                            isAdmin ? <>


                            <div className='mt-10'>
                            <Link to='/dashboard/adminhome' className={`flex rounded-md  p-4  cursor-pointer  hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <span ><FaHome className='w-5 h-5'></FaHome></span> <span className={`${!open && 'scale-0'}`}>Admin Home </span></Link>
                            <Link  to='/dashboard/addProduct' className={`flex rounded-md p-4  cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <span ><FaShoppingCart className='w-5 h-5'></FaShoppingCart></span>  <span className={`${!open && 'scale-0'}`}> Add Product </span></Link>
                            <Link  to='/dashboard/manageproduct' className={`flex rounded-md  p-4  cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <span ><FaShoppingCart className='w-5 h-5'></FaShoppingCart></span> <span className={`${!open && 'scale-0'}`}>  Manage Product </span></Link>
                            <Link  to='/dashboard/allusers' className={`flex rounded-md  p-4  cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <span ><FaUsers className='w-5 h-5'></FaUsers ></span> <span className={`${!open && 'scale-0'}`}> All Users </span ></Link>
                            <Link  to='/dashboard/mycart' className={`flex rounded-md  p-4  cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <span ><FaShoppingCart className='w-5 h-5'></FaShoppingCart></span> <span className={`${!open && 'scale-0'}`}> My Cart </span></Link>
                            <Link to='/' className={`flex rounded-md  p-4  cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}>  <span ><FaHome className='w-5 h-5'></FaHome> </span > <span  className={`${!open && 'scale-0'}`}>Home</span> </Link>

                    
                            </div>
                            
                            </> : 
                            <>
                            {/* <button  className='fixed lg:hidden z-90 top-10 left-0 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300'>
                                <span>
                                    <FaBars className='w-6'></FaBars>
                                </span>
                            </button> */}

                            <div className='mt-10'>
                            <Link to='/dashboard/mycart' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}> <span><FaShoppingCart className='w-5 h-5'></FaShoppingCart></span> <span className={`${!open && 'scale-0'}`}>Mycart </span></Link>
                            <Link to='/' className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-800 text-white text-sm items-center gap-x-4`}>  <span ><FaHome className='w-5 h-5'></FaHome> </span > <span  className={`${!open && 'scale-0'}`}>Home</span> </Link>

                            </div>
                            
                            </>
                        }

                </ul>
                </div>
        </div>
    );
};

export default Sidebar;