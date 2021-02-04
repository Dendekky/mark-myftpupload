import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Product from '../components/Product'

function Home () {
  return (
    <div className='site-container'>
      <Header />
      <Product />
      <Footer />
    </div>
  )
}

export default Home
