import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Navbar,
  // NavDropdown,
  // Form,
  // FormControl,
  // Button,
  Nav,
} from 'react-bootstrap';
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import Bio from "./Bio"
function NavElement() {
  return (
    <React.Fragment>
      <Navbar bg='light' expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Navbar.Brand
            id='Brand'
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
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/'>Home</NavDropdown.Item>
              <NavDropdown.Item href='/portfolio'>Portfolio</NavDropdown.Item>
              <NavDropdown.Item href='/contact'>Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavElement;
