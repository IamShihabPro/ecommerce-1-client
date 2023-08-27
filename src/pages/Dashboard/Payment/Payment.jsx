import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);

const Payment = () => {
    return (
        <div>
            <h2 className='text-2xl text-center font-medium mb-2'>All Product Payment Here</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;