import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
// import StoreInput from './Storage';
import axios from 'axios';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  refreshPage() {
    window.location.reload(false);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangeMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }

  //Submit
  handleClick = (e) => {
    e.preventDefault();
    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(payload);
    alert('Form submitted');

    axios({
      url: '/testAPI/save',
      method: 'POST',
      data: payload,
    })
      .then(() => {
        console.log('Data has been sent to the server ');
      })
      .catch(() => {
        console.log('Internal server error');
      });
  };

  render() {
    console.log('State ', this.state);
    return (
      <React.Fragment>
        <Container>
          <Jumbotron style={{ marginTop: '20px' }}>
            <Badge variant='light'>
              <h1>Contact</h1>
              <div className='App'>
                <header className='App-header'>
                  <p className='App-intro text-secondary'>server running</p>
                </header>
              </div>
            </Badge>
            <hr></hr>

            <Form onSubmit={this.handleClick} id='formInput'>
              <Form.Group>
                {/* controlId="formBasicName"> */}
                <Col xs={6}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    name=''
                    placeholder='Name'
                    id='entryName'
                    value={this.name}
                    onChange={this.handleChangeName}
                  ></Form.Control>

                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='text'
                    name=''
                    placeholder='Enter email'
                    id='eMail'
                    value={this.email}
                    onChange={this.handleChangeEmail}
                  />
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type='text'
                    name=''
                    placeholder='Message'
                    id='message'
                    value={this.message}
                    onChange={this.handleChangeMessage}
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
              <Button
                onClick={this.refreshPage}
                size='sm'
                style={{
                  marginTop: '10px',
                  backgroundColor: 'rgb(137, 224, 220)',
                }}
              >
                Reset
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
