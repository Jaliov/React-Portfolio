import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavElement = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
          <Link to='/home'>
            <h4>Joel Rudin</h4>
          </Link>
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
