import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';
import Img01 from '../assets/images/img01.jpg';
import Img02 from '../assets/images/img02.jpg';
import Img03 from '../assets/images/img03.jpg';
import Img04 from '../assets/images/img04.jpg';
import Img05 from '../assets/images/img05.jpg';

const ProductButton = ({ disabled, children }) => (
  <button
    className={`product-button ${disabled ? 'disabled-product-button' : ''}`}
    disabled={disabled}
  >
    {children}
  </button>
);

const Product = ({
  title = defaultTitle,
  price = defaultPrice,
  sizes = defaultSizes,
  description = defaultDescription,
  details = defaultDetails,
  material = defaultMaterial,
  shipment = defaultShipment,
  preOrder = defaultPreOrder,
  productImages = defaultProductImages,
}) => {
  const [productSize, setProductSize] = useState(1);
  const increaseProductSize = () => setProductSize(productSize + 1);
  const decreaseProductSize = () => setProductSize(productSize - 1);

  return (
    <Row className='product px-5'>
      <Col sm='12' md='6' lg='6' className='product-images'>
        {productImages.map((img, idx) => (
          <img key={idx} src={img} alt='product-images' className='py-3 px-1' />
        ))}
      </Col>
      <Col sm='12' md='6' lg='6' className='product-details'>
        <div className='product-title'>{title}</div>
        <p>{price}</p>
        <p className='font-weight-bold'>SIZE CHART</p>
        <div className='product-size'>
          <span className='pr-4'>SIZE</span>
          <select>
            <option>Choose an option</option>
            {sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className='product-quantity d-flex flex-row py-2'>
          <span className='pr-3' onClick={decreaseProductSize}>
            -{' '}
          </span>{' '}
          <p> {productSize} </p>{' '}
          <span className='pl-3' onClick={increaseProductSize}>
            +
          </span>
        </div>
        <div>
          <ProductButton disabled>ADD TO SHOPPING BAG</ProductButton>
          <ProductButton>ADD TO WISHLIST</ProductButton>
          <ProductButton>LMH FRONT ROW</ProductButton>
        </div>
        <div className='product-description'>
          <p>{description}</p>
          <p>AVAILABLE ALSO IN PURE WHITE.</p>
        </div>
        <div className='product-accordions'>
          <Accordion className='d-flex flex-column'>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='0'
              className='acc-toggler'
            >
              > DETAILS
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <div dangerouslySetInnerHTML={{ __html: details }} />
            </Accordion.Collapse>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='1'
              className='acc-toggler'
            >
              > MATERIAL & CARE
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <div dangerouslySetInnerHTML={{ __html: material }} />
            </Accordion.Collapse>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='2'
              className='acc-toggler'
            >
              > SHIPMENT & RETURNS
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <div dangerouslySetInnerHTML={{ __html: shipment }} />
            </Accordion.Collapse>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='3'
              className='acc-toggler'
            >
              > PRE ORDERS
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <div dangerouslySetInnerHTML={{ __html: preOrder }} />
            </Accordion.Collapse>
          </Accordion>
        </div>
      </Col>
    </Row>
  );
};

export default Product;

const defaultTitle = '— THE FINE KNIT CASHMERE BABY BLANKET METROPOLITAN GREY';
const defaultPrice = '€475.00';
const defaultSizes = ['ONE SIZE'];
const defaultDescription = `GIVE YOUR NEWBORN THE VERY BEST FROM THE VERY BEGINNING WITH OUR CASHMERE FINE KNIT BABY BLANKET. BEAUTIFULLY LIGHTWEIGHT AND SOFT, OUR BLANKET IS THE PERFECT ACCOMPANIMENT FOR ANY NEW PARENT. ULTRA-SOFT AGAINST YOUR BABY’S SKIN, CASHMERE TRAPS HEAT WITHIN THE SMALL AIR POCKETS OF THE KNIT, HELPING TO REGULATE THE TEMPERATURE AROUND YOUR BABY AND PROTECTING THEM WITH A COZY YET BREATHABLE ENVIRONMENT. USE THIS BLANKET IN YOUR PRAM OR STROLLER, OR AS A SNUGGLY WRAP WHILE BEING HELD – YOU’LL FIND IT BECOMES A MUST-HAVE ESSENTIAL TO KEEP TO HAND AT ALL TIMES.`;
const defaultDetails = `<p>SIZE: 100X80 CM. </p> <p>EXTRA FINE KNIT. </p> <p>AVAILABLE IN PURE WHITE OR METROPOLITAN GREY. </p> <p>CONTRASTING BORDER</p>`;
const defaultMaterial = `
  <p> MADE FROM THE PUREST AND FINEST CASHMERE.</p>
  <p>
    HANDCRAFTED IN ITALY WITH EXCELLENCE AND RESPECT FOR PEOPLE
    AND OUR PLANET.
  </p>
  <p>
    HAND WASH IN LUKEWARM WATER USING A MILD CASHMERE SOAP. .
  </p>`;
  const defaultShipment = `
  <p>Our garments are always shipped free of charge.</p>
  <p>
  We guarantee 30 days to return or to exchange an item free of
  charge.
  </p>`;
const defaultPreOrder = `
  <p>
    LMH products are made one by one by our craftsmen in Italy and
    can go out of stock very easily.
  </p>
  <p>
    If your LMH Essentials is not available right now, you can pre
    order it and it will be ready in maximum 28 days.
  </p>
  <p>
    Please note that your card will be pre authorized for the
    total amount of your pre-order but will be charged just when
    your LMH Essential will be ready to be shipped.
  </p>
  <p> For further information click here. </p>`;

const defaultProductImages = [Img01, Img02, Img03, Img04, Img05];
