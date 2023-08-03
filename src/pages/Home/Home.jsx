import React from 'react';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';
import ShopPage from '../ShopPage/ShopPage';

const Home = () => {
    return (
        <div>
            
                {/* <ProductData></ProductData> */}
                <ShopPage></ShopPage>

                <ProductSlider></ProductSlider>
        </div>
    );
};

export default Home;