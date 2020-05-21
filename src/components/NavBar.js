import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavElement = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Navbar.Brand
          id='brand'
          href='/'
          style={{
            fontWeight: 'bold',
            backgroundColor: 'rgb(137, 224, 220)',
          }}
          className='text-light'
        >
          Joel Rudin
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/home'>Home</Nav.Link>
          <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavElement;
