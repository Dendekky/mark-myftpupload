import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

import brandLogo from '../assets/brand_logo.png'

function Header () {
  const [currentItem, setCurrentItem] = useState(null)

  const CustomNavDropDown = ({ title, id, children, items }) => {
    return (
      <NavDropdown
        title={title}
        className='navbar--link'
        show={currentItem === id}
        onMouseEnter={() => setCurrentItem(id)}
        onMouseLeave={() => setCurrentItem(null)}
        id='basic-nav-dropdown'
      >
        {items
          ? items.map((item) => (
            <NavDropdown.Item key={item.name} href={item.href}>
              {item.name}
            </NavDropdown.Item>
          ))
          : null}
        {children}
      </NavDropdown>
    )
  }
  return (
    <Navbar className='navbar' expand='lg'>
      <Navbar.Brand className='navbar--logo' href='#home'>
        <Image src={brandLogo} alt='Brand Logo' />
      </Navbar.Brand>
      <Nav className='icons mobile'>
        <Nav.Link href='#home' className='navbar--link'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            width='25px'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
        </Nav.Link>
        <Nav.Link href='#home' className='navbar--link'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            width='25px'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
            />
          </svg>
        </Nav.Link>
        <Nav.Link href='#home' className='navbar--link'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            width='25px'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Image className='brand-logo mobile' src={brandLogo} alt='Brand Logo' />
        <Navbar.Toggle aria-controls='basic-navbar-nav' as='p' className='navbar--hide'>🗙</Navbar.Toggle>
        <NavDropdown.Divider className='navbar--divider mobile' />
        <Nav className='mr-auto'>
          <Nav.Link href='#home' className='navbar--link'>
              FRONT ROW
          </Nav.Link>
          <CustomNavDropDown title='BOUTIQUE' id='1'>
            <NavDropdown.Item href='#action/3.1'><strong>WOMAN</strong></NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>KNITWEAR</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
                SHIRTS & TOPS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'><strong>MINIME</strong></NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>KNITWEAR</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>
                SHIRTS & TOPS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'><strong>LIFE.STYLE</strong></NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>
                BABY BLANKETS
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>
                HOME COLLECTION
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>LIFE</NavDropdown.Item>
          </CustomNavDropDown>
          <CustomNavDropDown
            title='JOURNAL'
            id='2'
            items={[
              { name: 'STORIES', link: '#' },
              { name: 'COLLABORATIONS', link: '#' },
              { name: 'STYLE', link: '#' },
              { name: 'INSTAGRAM', link: '#' }
            ]}
          />
          <CustomNavDropDown
            title='PHILOSOPHY'
            id='3'
            items={[
              { name: 'STORY', link: '#' },
              { name: 'VALUES', link: '#' },
              { name: 'ARTISANS', link: '#' },
              { name: 'FABRICS', link: '#' }
            ]}
          />
          <CustomNavDropDown
            title='CARE'
            id='4'
            items={[
              { name: 'CARE INSTRUCTIONS', link: '#' },
              { name: 'GET IN TOUCH', link: '#' },
              { name: 'RETURNS', link: '#' },
              { name: 'PRE ORDER', link: '#' },
              { name: 'FAQ', link: '#' }
            ]}
          />
        </Nav>
        <NavDropdown.Divider className='navbar--divider mobile' />
        <div className='space mobile' />
        <Nav className='icons'>
          <Nav.Link href='#home' className='navbar--link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='25px'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </Nav.Link>
          <Nav.Link href='#home' className='navbar--link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='25px'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
          </Nav.Link>
          <Nav.Link href='#home' className='navbar--link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='25px'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
