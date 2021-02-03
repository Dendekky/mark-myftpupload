import React from 'react';
import { InputGroup } from 'react-bootstrap';

const FooterButton = ({ children }) => (
  <button className='footer-form-button'>{children}</button>
);

const Footer = () => (
  <div className='footer'>
    <div className='footer-cta'>
      <span>Subscribe now for trend updates, style tips and more</span>
      <div>
        <InputGroup>
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
  </div>
);

export default Footer;
