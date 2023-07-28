import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-24 md:px-14 sm:px-2 px-4'>
            {children}
        </div>
    );
};

export default Container;