import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    console.log(price);
    return (
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto mt-10'>
            <h2 className='text-2xl text-center font-medium mb-10'>All Product Payment Here</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;