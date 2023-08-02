import React from 'react';
import Container from '../Container/Container';

const ProductView = () => {
    return (
        <Container>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6'>
                <div>
                    <img src="https://img.freepik.com/free-psd/mens-tri-blend-crew-tee-mockup_126278-130.jpg?w=740&t=st=1690941957~exp=1690942557~hmac=01b688ff0f8dd9689eb81db062806272d74ab09f60c69fb2efd0e2e4164284be" alt="" className='w-full' />
                    {/* <div className='grid grid-cols-5 gap-4 mt-4'> </div> */}
                </div>

                {/* product content */}
                <div>
                    <h2 className='text-3xl font-bold'>Mens T-Shirt</h2>
                    <div className="flex gap-1 text-yellow-400">*****</div>
                    <p className='text-gray-800 font-semibold my-1'>Category: Men</p>
                    <p className='text-lg text-red-500  my-1'>Price: $19.20</p>

                    

                </div>

            </div>
        </Container>
    );
};

export default ProductView;