import React from 'react';

const CategoryBox = ({item}) => {
    return (
        <div className='flex flex-row items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>
            
               <div className=''> {item.category}</div>

        </div>
    );
};

export default CategoryBox;