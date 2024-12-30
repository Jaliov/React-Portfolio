import React, { Component, Fragment } from "react";
import { Button, Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
//import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../App.css";
import axios from "axios";

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
    // this.handleChangeName = this.handleChangeName.bind(this);
    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
    // this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  refreshPage = () => {
    window.location.reload(false);
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  //Submit
  handleClick = (e) => {
    e.preventDefault();
    const payload = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(payload);

    axios({
      //http://localhost:4000/testAPI/save
      url: "/testAPI/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server ");
        alert("Form submitted");
        this.refreshPage();
      })
      .catch(() => {
        console.log("Internal server error");
        alert("Error");
        this.refreshPage();
      });
  };

  render() {
    console.log("State ", this.state);
    const { name, email, message } = this.props;

    return (
      <Fragment>
        <Container>
          <div
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60, 0.7)",
            }}
          >
            <Badge variant="light">
              <h1 className="text-secondary">Contact Me</h1>
              <div className="App">
                <header className="App-header">
                  <p className="App-intro text-white">server is now running</p>
                </header>
              </div>
            </Badge>
            <hr></hr>

            <Form onSubmit={this.handleClick} id="formInput">
              <Form.Group>
                {/* controlId="formBasicName"> */}
                <Col xs={6}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name=""
                    placeholder="Name"
                    id="entryName"
                    value={name}
                    onChange={this.handleChangeName}
                  ></Form.Control>

                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    name=""
                    placeholder="Email"
                    id="eMail"
                    value={email}
                    onChange={this.handleChangeEmail}
                  />
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    name=""
                    placeholder="Message"
                    id="message"
                    value={message}
                    onChange={this.handleChangeMessage}
                  />
                </Col>
              </Form.Group>
            </Form>

            <Col xs={6}>
              <Button
                onClick={this.handleClick}
                variant="primary"
                size="sm"
                className="text-light"
              >
                Submit
              </Button>
            </Col>
            <Card style={{ width: "18rem" }} />
            <Card.Body>
              <Card.Title>Joel Rudin</Card.Title>
              <h6 className="card-subtitle mb-2 text-muted">
                github.com/Jaliov
              </h6>
              <Card.Link href="https://www.linkedin.com/in/joel-rudin-39b44819/">
                LinkedIn
              </Card.Link>

              <br />
              <Card.Link href="mailto:jarud55@gmail.com" className="card-link">
                {" "}
                jarud55@gmail.com
              </Card.Link>

              <p className="card-text">609/865-2142</p>
            </Card.Body>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default ContactInfo;
