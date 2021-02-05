import React from 'react'

import Img06 from '../assets/images/img06.jpg'
import Img07 from '../assets/images/img07.jpg'
import Img08 from '../assets/images/img08.jpg'
import Img09 from '../assets/images/img09.jpg'
import Img10 from '../assets/images/img10.jpg'
import Img11 from '../assets/images/img11.jpg'
import Img12 from '../assets/images/img12.jpg'
import Img13 from '../assets/images/img13.jpg'
import Img14 from '../assets/images/img14.jpg'
const BoutiqueWomenProduct = ({ data }) => (
  <>
    <div className='boutique-women--product__images'>
      <img src={data.imageOne} />
    </div>
    <div className='boutique-women--product__details'>
      <div>
        <p className='boutique-women--product__description'>— {data.description}</p>
        <p className='boutique-women--product__price'>€{data.price}.00</p>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        width='20px'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>
    </div>
  </>
)

function BoutiqueWomen () {
  return (
    <>
      {boutiqueWomenProducts.map(({ topLeft, topRight, bottom }) => (
        <div key={topLeft.imageOne} className='boutique-women'>
          <div className='top-left'>
            <BoutiqueWomenProduct data={topLeft} />
          </div>
          <div className='top-right'>
            <BoutiqueWomenProduct data={topRight} />
          </div>
          <div className='bottom'>
            <BoutiqueWomenProduct data={bottom} />
          </div>
        </div>
      ))}
    </>
  )
}

const boutiqueWomenProducts = [
  {
    topLeft: {
      imageOne: Img06,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    },
    topRight: {
      imageOne: Img07,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    },
    bottom: {
      imageOne: Img08,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    }
  },
  {
    topLeft: {
      imageOne: Img09,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    },
    topRight: {
      imageOne: Img10,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    },
    bottom: {
      imageOne: Img11,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    }
  },
  {
    topLeft: {
      imageOne: Img12,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    },
    topRight: {
      imageOne: Img13,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    },
    bottom: {
      imageOne: Img14,
      description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
      price: '500'
    }
  }
]

export default BoutiqueWomen
