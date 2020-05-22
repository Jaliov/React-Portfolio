import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavElement = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Navbar.Brand
          id='brand'
          style={{
            fontWeight: 'bold',
            backgroundColor: 'rgb(137, 224, 220)',
          }}
          className='text-light'
        >
          {' '}
          <Link className='text-light' to='/'>
            Joel Rudin
          </Link>
        </Navbar.Brand>
        <Link className='nav-item nav-link active' to='/'>
          Home
        </Link>
        <Link className='nav-item nav-link' to='/portfolio'>
          Portfolio
        </Link>
        <Link className='nav-item nav-link' to='/contact'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavElement;
