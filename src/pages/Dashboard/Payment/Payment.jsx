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
    return (
        <div>
            <h2 className='text-2xl text-center font-medium mb-2'>All Product Payment Here</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;