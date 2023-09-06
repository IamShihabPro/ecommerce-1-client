import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaSitemap, FaUsers } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Components/Loader/Loader';
import useAdmin from '../hooks/useAdmin';
import Sidebar from '../Components/Sidebar/Sidebar';

const Dashboard = () => {
  const {user, loading} = useContext(AuthContext)

  // const isAdmin = true
  const [isAdmin] = useAdmin();
  
  if(loading){
    return <Loader></Loader>
}

    return (
      <div className='flex bg-slate-200'>
      <div className='fixed z-10 h-full'>
      <Sidebar></Sidebar>
      </div>

      <div className='p-7 bg-slate-200 text-2xl font-semibold flex-1 min-h-screen ml-32'>
          <Outlet></Outlet>
      </div>
      
  </div>
    );
};

export default Dashboard;