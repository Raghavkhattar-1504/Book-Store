import React from 'react'
import Navbar from '../components/Navbar'
import MyCartContainer from '../components/MyCartContainer'
import AddressCart from '../components/AddressCart'
import OrderSummary from '../components/OrderSummary'
import Footer from '../components/Footer'

const MyCartPage = () => {
  return (
    <div>
      <Navbar />
      <MyCartContainer />
      <AddressCart />
      <OrderSummary />
      <Footer />
    </div>
  )
}

export default MyCartPage
