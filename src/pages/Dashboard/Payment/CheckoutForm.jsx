import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();

    const {user} = useAuth()

    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const [axiosSecure] = useAxiosSecure()


    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[price, axiosSecure])

    const handleSubmit = async (event) =>{
         // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
        return;
        }

        // console.log('card', card);
        
          // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
          }


          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous',
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError);
          }

          console.log(paymentIntent);


    }

    return (
       <>
       
       <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn btn-primary btn-xs mt-4 cursor-pointer rounded' disabled={!stripe || !clientSecret}>
          Payment
        </button>
      </form>

      {
        cardError && <p className='text-red-600 font-medium text-center'> {cardError} </p>
      }
       
       </>
    );
};

export default CheckoutForm;