import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from 'react-stripe-elements'
import axios from 'axios'
import './CheckoutForm2.scss'
import {FirestoreDocument, FirestoreCollection} from 'react-firestore'
import {Grid, Image, Segment, Form, Input} from 'semantic-ui-react';
import firebase from 'firebase';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const CheckoutForm2 = ({ stripe, history }) => {  
    const [receiptUrl, setReceiptUrl] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')
    const [testingWow, setTestingWow] = useState(null)

    useEffect(() => {
      setTestingWow(firebase.firestore())
    },[])
  
    const handleSubmit =async (price, event) => {
      event.preventDefault()
  
      const { token } = await stripe.createToken()
      console.log("price")
      const order = await axios.post(' https://serverbrett.herokuapp.com/api/stripe/charge', {
        amount: price.toString().replace('.', ''),
        source: token.id,
        receipt_email: 'customer@example.com'
      })
      testingWow.collection('orders').add({
        name: name,
        address: address,
        address2: address2,
        zipcode: zipcode,
        phone: phone,
        price: price,
        receiptUrl: order.data.charge.receipt_url,
       }).then(); 
  
      setReceiptUrl(order.data.charge.receipt_url)
    }

    if (receiptUrl) {
        return (
          <div className="success">
            <h2>Payment Successful!</h2>
            <a href={receiptUrl}>View Receipt</a>
            <Link to="/">Home</Link>
          </div>
        )
      }

      return (
        <>
                    <NavBar/>
    <Grid centered padded='horizontally'>
    
    <Grid.Row>
      <Grid.Column width={15}>
      <FirestoreCollection
                    path="services"
                    render={({ isLoading, data }) => {
                        return isLoading ? (
                          //   <Dimmer active>
                          //   <Loader size='massive'>Loading</Loader>
                          // </Dimmer>
                          ''
                        ) : (
                            <>
                            {data.map(story => (
                              <>
    <div className="checkout-forms">
          <p>Amount: ${story.prodprice1}</p>
          <form onSubmit={(e) => handleSubmit(story.prodprice1, e)}>
          <label>
              <h5>Name:</h5>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="newinput"
            placeholder="Your name.."
          />
            </label>
            <label>
              <h5>Address:</h5>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="newinput"
            placeholder="Your address.."
          />
            </label>
            <label>
              <h5>Address 2:</h5>
          <input
            onChange={(e) => setAddress2(e.target.value)}
            type="text"
            className="newinput"
            placeholder="Address 2.."
          />
            </label>
            <label>
              <h5>Zip Code:</h5>
          <input
            onChange={(e) => setZipcode(e.target.value)}
            type="text"
            className="newinput"
            placeholder="Your zipcode.."
          />
            </label>
            <label>
              <h5>Phone Number:</h5>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="newinput"
            placeholder="Your phone number.."
          />
            </label>
            <label>
              Card details
              <CardNumberElement />
            </label>
            <label>
              Expiration date
              <CardExpiryElement />
            </label>
            <label>
              CVC
              <CardCVCElement />
            </label>
            <button type="submit" className="order-button">
              Pay
            </button>
          </form>
        </div>
                                      </>
                            ))}
                            </>
                        );
                    }}
                    />
      </Grid.Column>
    </Grid.Row>

  
  </Grid> 
  <Footer/>
        </>
      )
    }
    
    export default injectStripe(CheckoutForm2)