import React from 'react';
import Nabvbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../hooks/useAuth';

const Main = () => {
    const {theme} = useAuth()
    return (
        <div>
            <Nabvbar></Nabvbar>
            <div className={`pt-28 pb-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;