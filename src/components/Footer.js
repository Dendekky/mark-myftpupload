import React from 'react';
import { Col, InputGroup, Row } from 'react-bootstrap';

const FooterButton = ({ children }) => (
  <button className='footer-form-button'>{children}</button>
);
const FooterLink = ({ children }) => (
  <a className='footer-link' href='/#'>
    {children}
  </a>
);

const Footer = () => (
  <>
    <div className='footer'>
      <div className='footer-cta'>
        <span>Subscribe now for trend updates, style tips and more</span>
        <div>
          <InputGroup className='d-flex justify-content-center'>
            <input
              className='footer-form-input'
              placeholder='Enter your email address'
              required
            />
            <InputGroup.Append>
              <FooterButton>SUBSCRIBE</FooterButton>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
      <div className='footer-links d-flex flex-column flex-lg-row justify-content-around px-1 px-md-4 py-5'>
        <FooterLink>MY ACCOUNT</FooterLink>
        <FooterLink>LMH FRONT ROW</FooterLink>
        <FooterLink>COLLABORATIONS</FooterLink>
        <FooterLink>CUSTOMER CARE</FooterLink>
        <FooterLink>SHIPPING & RETURNS</FooterLink>
      </div>
    </div>
    <div className='footer-pad'>
      <Row>
        <Col>© Linda Meyer-Hentschel </Col>
        <Col>
          <div className='link-items d-flex flex-column flex-md-row justify-content-around'>
            <span>Legal</span>
            <span>Cookie Policy</span>
            <span>Privacy Policy</span>
            <span>Imprint</span>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default Footer;
