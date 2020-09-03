import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm';

const Checkout = ({ selectedProduct, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StripeProvider apiKey="pk_live_51H1v6GAEkC4Y4VpMlJQjTnyCPnyv49iLGQDmJCZX3wr8bm557uJ6ruHhCzwgnSySSHzkhWspD3dmsN99SZBsMFNE00tqs8MSp8">
      <Elements>
        <CheckoutForm selectedProduct={selectedProduct} history={history} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout