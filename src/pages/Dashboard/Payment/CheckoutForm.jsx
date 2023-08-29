import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import './CheckoutForm.css'

const CheckoutForm = ({cart, price}) => {
    const stripe = useStripe();
    const elements = useElements();

    const {user} = useAuth()

    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    const [axiosSecure] = useAxiosSecure()


    useEffect(()=>{
      if(price > 0){
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
      }
    },[price, axiosSecure])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) { 
            return;
        }

       
        const card = elements.getElement(CardElement);

        if (card == null) {
        return;
        }

       
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            // console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('')
            // console.log('[PaymentMethod]', paymentMethod);
          }


          setProcessing(true)

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
            // console.log(confirmError);
          }

          // console.log(paymentIntent);

          setProcessing(false)

          if(paymentIntent.status === 'succeeded' ){
            // const transactionId = paymentIntent.id
            setTransactionId(paymentIntent.id)

            // save payment information to the server

            const payment = {
              email: user.email, 
              name: user.displayName,
              transactionId: paymentIntent.id,
              price, quanity: cart.length,
              date: new Date(),
              status: 'service pending',
              cartItem: cart.map(item => item._id),
              productItem: cart.map(item => item.productId),
              productName: cart.map(item => item.name)
             }
             axiosSecure.post('/payments', payment)
             .then(res =>{
              console.log(res.data);
              if(res.data.insertedId){

              }
             })
          }
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
        <button type="submit" className='btn btn-primary btn-xs mt-4 cursor-pointer rounded' disabled={!stripe || !clientSecret || processing}>
          Payment
        </button>
      </form>

      {
        cardError && <p className='text-red-600 font-medium text-center'> {cardError} </p>
      }
      {
        transactionId && <p className='text-green-600 font-medium text-center'> Transaction Complete with id : {transactionId}</p>
      }
       
       </>
    );
};

export default CheckoutForm;