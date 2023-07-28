import React from 'react';
import Categories from '../../Components/Categories/Categories';
import Cloths from '../../Components/Cloths/Cloths';

const Home = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center'>
                <Categories></Categories>
                <Cloths></Cloths>
            </div>
        </div>
    );
};

export default Home;