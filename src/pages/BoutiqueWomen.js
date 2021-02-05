import React, { useEffect, useState } from 'react'

import Img06 from '../assets/images/img06.jpg'
import Img07 from '../assets/images/img07.jpg'
import Img08 from '../assets/images/img08.jpg'
import Img09 from '../assets/images/img09.jpg'
import Img10 from '../assets/images/img10.jpg'
import Img11 from '../assets/images/img11.jpg'
import Img12 from '../assets/images/img12.jpg'
import Img13 from '../assets/images/img13.jpg'
import Img14 from '../assets/images/img14.jpg'

const BoutiqueWomenProduct = ({ id, data }) => {
  const [currentItem, setCurrentItem] = useState(null)
  const switchDisplay = id === currentItem

  return (
    <div
      onMouseEnter={() => setCurrentItem(id)}
      onMouseLeave={() => setCurrentItem(null)}
    >
      <div
        className='boutique-women--product__images'
        onMouseEnter={() => setCurrentItem(id)}
      >
        <img
          src={switchDisplay ? data.imageTwo : data.imageOne}
          alt={data.description}
        />
      </div>
      <div className='boutique-women--product__details'>
        <div>
          <p className='boutique-women--product__description'>
            — {data.description}
          </p>
          {switchDisplay ? (
            <p className='boutique-women--product__cta'>Add to shopping bag</p>
          ) : (
            <p className='boutique-women--product__price'>€{data.price}.00</p>
          )}
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
    </div>
  )
}

function BoutiqueWomen ({
  boutiqueWomenProductData = defaultBoutiqueWomenProductData
}) {
  const [productArr, setProductArr] = useState([])
  useEffect(() => {
    const newArr = () => {
      const someArr = []
      for (let i = 0; boutiqueWomenProductData.length > 0;) {
        const alertNow = boutiqueWomenProductData.splice(0, 3)
        someArr.push(alertNow)
        setProductArr(someArr)
      }
    }
    newArr()
  }, [])
  return (
    <>
      {productArr.map((product, idx) => {
        return (
          <div key={idx} className='boutique-women'>
            <div className='top-left'>
              <BoutiqueWomenProduct id={product[0].id} data={product[0]} />
            </div>
            <div className='top-right'>
              <BoutiqueWomenProduct id={product[1].id} data={product[1]} />
            </div>
            <div className='bottom'>
              <BoutiqueWomenProduct id={product[2].id} data={product[2]} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BoutiqueWomen

const defaultBoutiqueWomenProductData = [
  {
    id: 0,
    imageOne: Img06,
    imageTwo: Img07,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 1,
    imageOne: Img07,
    imageTwo: Img08,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 2,
    imageOne: Img08,
    imageTwo: Img09,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 3,
    imageOne: Img09,
    imageTwo: Img10,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 4,
    imageOne: Img10,
    imageTwo: Img11,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 5,
    imageOne: Img11,
    imageTwo: Img12,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 6,
    imageOne: Img12,
    imageTwo: Img13,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 7,
    imageOne: Img13,
    imageTwo: Img14,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  },
  {
    id: 8,
    imageOne: Img14,
    imageTwo: Img06,
    description: ' THE MOST LUXURIOUS T-SHIRT IN THE WORLD',
    price: '500'
  }
]
