import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import StoreInput from './Storage';

class ContactInfo extends Component {
  handleClick = (e) => {
    e.preventDefault();
    StoreInput();
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Jumbotron style={{ marginTop: '20px' }}>
            <Badge variant='light'>
              <h1>Contact</h1>
            </Badge>
            <hr></hr>

            <Form onSubmit>
              <Form.Group>
                {/* controlId="formBasicName"> */}
                <Col xs={6}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' placeholder='Name' id='entryName' />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    id='eMail'
                  />
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Message'
                    id='Message'
                  />
                </Col>
              </Form.Group>
            </Form>

            <Col xs={6}>
              <Button
                onClick={this.handleClick}
                variant='primary'
                size='sm'
                style={{ marginTop: '10px' }}
              >
                Submit
              </Button>
            </Col>
            <Card style={{ width: '18rem' }} />
            <Card.Body>
              <Card.Title>Joel Rudin</Card.Title>
              <h6 className='card-subtitle mb-2 text-muted'>
                github.com/Jaliov
              </h6>
              <Card.Link href='https://www.linkedin.com/in/joel-rudin-39b44819/'>
                LinkedIn
              </Card.Link>

              <br />
              <Card.Link href='mailto:jarud55@gmail.com' className='card-link'>
                {' '}
                jarud55@gmail.com
              </Card.Link>

              <p className='card-text'>609/865-2142</p>
            </Card.Body>
          </Jumbotron>
        </Container>
      </React.Fragment>
    );
  }
}

export default ContactInfo;
