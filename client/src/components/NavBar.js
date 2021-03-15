import React from 'react';
import { Navbar, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavElement = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Badge
          style={{
            color: 'rgb(137, 224, 220)',
            fontFamily: 'PT Serif, serif',
          }}
        >
          <Link className='text-light' to='/home'>
            <h4 style={{ color: 'rgb(137, 224, 220)' }}>Joel Rudin</h4>
          </Link>
        </Badge>

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
