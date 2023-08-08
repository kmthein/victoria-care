import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CardForm from './CardForm';

const PUBLIC_KEY = "pk_test_51NXFVlFVeqRdavy9HGcgYMCfzV8LhswlsIEbmORfLS2BhsBwQQzIwsPrY2DZXWYueAh39u1wuuoCvOafXr36O9u20003qrsI8I";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <CardForm />
    </Elements>
  )
}

export default StripeContainer