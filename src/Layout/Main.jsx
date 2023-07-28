import React from 'react';
import Nabvbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nabvbar></Nabvbar>
            <div className='pt-28 pb-20'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;