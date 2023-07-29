import React from 'react';
import ProductData from '../../Components/ProductData/ProductData';
// import Categories from '../../Components/Categories/Categories';
// import Cloths from '../../Components/Cloths/Cloths';
// import ProductList from '../../Components/ProductList/ProductList';

const Home = () => {
    return (
        <div>
            {/* <div className='flex flex-col md:flex-row lg:flex-row justify-center'>
                <Categories></Categories>
                <Cloths></Cloths>
            </div> */}
                {/* <ProductList></ProductList> */}

                <ProductData></ProductData>
        </div>
    );
};

export default Home;