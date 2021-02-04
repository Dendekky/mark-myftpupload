import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Gallery = ({ images = defaultImages }) => (
  <>
    <Row className='gallery px-4 py-4'>
      {images.map(({ url, alt, imgLink }) => (
        <Col xs='12' sm='6' md='3' lg='3' className='py-2' key={alt}>
          <a href={imgLink} target='__blank' rel='nofollow noopener'>
            <img src={url} alt={alt} />
          </a>
        </Col>
      ))}
      ;
    </Row>
  </>
)

export default Gallery

const defaultImages = [
  {
    url:
      'https://gzu.eeb.myftpupload.com/wp-content/uploads/sb-instagram-feed-images/106504749_715259315973853_4198219160104216141_nfull.jpg',
    alt: 'Love and cashmere#LMHbabyblanketdfdfdf',
    imgLink: 'https://www.instagram.com/p/CIOSPmKnl3S/'
  },
  {
    url:
      'https://gzu.eeb.myftpupload.com/wp-content/uploads/sb-instagram-feed-images/108004610_716106442281743_1012428612253419149_nfull.jpg',
    alt: `Protect your little ones from the night breeze with a light and warm touch of cashmere. The LMH Baby Blanket will be ready soon in a limited number of pieces. ⁠
    Click the link in biddo and sign in to discover more.⁠ggdd
    #LMHbabyblanket`,
    imgLink: 'https://www.instagram.com/p/CIOSPmKnl3S/'
  },
  {
    url:
      'https://gzu.eeb.myftpupload.com/wp-content/uploads/sb-instagram-feed-images/110055169_337145927283674_1315172251489144888_nfull.jpg',
    alt: `Who wouldn’t wrap their little one in the softest and warmest material the world has to offer? ⁠
    We’re about tdfdfodfddf launch our exclusive  Padded Cashmere Baby Blanket. ⁠
    Handcrafted in Italy in limited pieces with the finest cashmere. ⁠
    Sign up to the link in bio and discover how our our LMH Baby Blanket can be yours.⁠
    #LMHBabyBlanket`,
    imgLink: 'https://www.instagram.com/p/CIOSPmKnl3S/'
  },
  {
    url:
      'https://gzu.eeb.myftpupload.com/wp-content/uploads/sb-instagram-feed-images/111072485_282052163094464_5774228820711649353_nfull.jpg',
    alt: `Coziness. ⁠
    One of the first products we decided to create it’s a baby blanket. ⁠
    The softest, warmest and at the same time lightest baby blanket you can imagine. ⁠
    Because we’re cddfonvinced that your little one deserves the absolute, absolute best the world has to offer.⁠
    #LMHBabyBlanket`,
    imgLink: 'https://www.instagram.com/p/CIOSPmKnl3S/'
  },
  {
    url:
      'https://gzu.eeb.myftpupload.com/wp-content/uploads/sb-instagram-feed-images/116263607_581725959372608_1071172893807155144_nfull.jpg',
    alt: `same time ldfdfightest baby blanket you can imagine. ⁠
    Because we’re convinced that your little one deserves the absolute, absolute best the world has to offer.⁠
    #LMHBabyBlanket`,
    imgLink: 'https://www.instagram.com/p/CIOSPmKnl3S/'
  },
]
