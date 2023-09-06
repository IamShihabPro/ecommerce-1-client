import React, { useState } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
// import Sidebar from '../Components/Sidebar/Sidebar';

const Dash = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='flex'>
            {/* <Sidebar></Sidebar> */}

            <div className='p-7 bg-slate-200 text-2xl font-semibold flex-1 h-screen'>
                <h1>Home Page</h1>
            </div>
            
        </div>
    );
};

export default Dash;