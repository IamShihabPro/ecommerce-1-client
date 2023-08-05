import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center bg-slate-200">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  
  </div> 

  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-gray-800">
      {/* Sidebar content here */}
      <li className='cursor-pointer'><NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active' : 'default') } ><FaHome></FaHome> User Home </NavLink></li>
      <li className=''><NavLink to='/dashboard/booking' className={({ isActive }) => (isActive ? 'active' : 'default')}><FaCalendarAlt></FaCalendarAlt> Bookings </NavLink></li>
      <li className=''><NavLink to='/dashboard/mycart' className={({ isActive }) => (isActive ? 'active' : 'default')}><FaShoppingCart></FaShoppingCart> My Cart  </NavLink></li>
      <li className=''><NavLink to='/dashboard/payment' className={({ isActive }) => (isActive ? 'active' : 'default')}><FaWallet></FaWallet> Payment History </NavLink></li>

     <hr className='w-full my-2 bg-white' />
     <li className=''><NavLink to='/' className='text-white hover:text-blue-600'><FaHome></FaHome> Home </NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;