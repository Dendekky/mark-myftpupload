import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Product from '../components/Product'
import Gallery from '../components/Gallery'

function Home () {
  return (
    <div className='site-container'>
      <Header />
      <Product />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home
