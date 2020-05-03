import React from "react";
//import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
//import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function ContactInfo() {
  return (
    <body>
      <Container>
        <Jumbotron>
          <h1 >Contact</h1>
          <hr></hr>

<Form>
          <Form.Group>
            <Col xs = {6}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Col>
          </Form.Group>
          </Form>
      
        <Col xs = {6}>
         
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" />
          
        </Col>

        <Button
          variant="primary" size="sm">Submit</Button>

        <Card style={{width: '18rem'}} />
        <Card.Body>
        <Card.Title>Joel Rudin</Card.Title>
            <h6 className="card-subtitle mb-2 text-muted">github.com/Jaliov</h6>
            <Card.Link href="https://www.linkedin.com/in/joel-rudin-39b44819/">LinkedIn</Card.Link>
            
            <br />
             <Card.Link href="mailto:jarud55@gmail.com" class="card-link"> jarud55@gmail.com</Card.Link>
             
          
            <p className="card-text">609/865-2142</p>
            </Card.Body>
            </Jumbotron>
      </Container>
    </body>
  );
}

export default ContactInfo