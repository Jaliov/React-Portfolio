import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import CodeQuizImg from "./images/Code_QuizImage.jpg";
import VistaImage from "./images/Morning Vista 2014smll.jpg";

import WeatherAppImg from "./images/WeatherAppImage.jpg";
import ViolinClassicsImg from "./images/violin_classics_scrnshot2.jpg";
import WorkdaySchl from "./images/WorkdayScheduler.jpg";
import FlamencoSiteImg from "./images/LisabflamencoScreenshot.jpg";

import BurgerLoggerImg from "./images/Burger-Logger.jpg";
import TextContent from "./TextContent";

const CardStyles = {
  marginTop: "20px",
  paddingTop: "20px",
  boxShadow: "15px 10px 10px rgb(179, 29, 61, 0.4)",
};
const CardClasses = "border border-danger bg-dark text-light";

const CardDisplay = () => {
  return (
    <Container>
      <h1 className="text-secondary text-center" style={{ marginTop: "20px" }}>
        Portfolio
      </h1>
      <Row>
        <CardDeck>
          <Card style={CardStyles} className={CardClasses}>
            <Card.Img variant="top" src={CodeQuizImg} />
            <Card.Body>
              <Card.Title>Viola Quiz!</Card.Title>
              <React.Fragment> {TextContent[0]} </React.Fragment>

              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Mongodb/Mongoose</li>
                    <li>Photoshop</li>
                  </ul>
                </ListGroup.Item>
                <ListGroupItem>Links:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://frozen-beach-43331.herokuapp.com/"
                target="blank"
                text="light"
              >
                Viola Quiz!
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/Code-Quiz-Viola"
              >
                GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>

          <Col md={1}></Col>

          {/* Weather-Map */}
          <Card className={CardClasses} style={CardStyles}>
            <Card.Img variant="top" src={WeatherAppImg} />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>

              <React.Fragment> {TextContent[1]} </React.Fragment>

              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>API/Ajax</li>
                    <li>Moment.js</li>
                    <li>Photoshop</li>
                  </ul>
                </ListGroup.Item>
                {/* <ListGroupItem>Links:</ListGroupItem> */}
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://jaliov.github.io/Weather-Map/"
                target="blank"
                text="light"
              >
                Weather App
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/Weather-Map"
              >
                GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>

          <Col md={1}></Col>

          <Card className={CardClasses} style={CardStyles}>
            <Card.Img variant="top" src={WorkdaySchl} />
            <Card.Body>
              <Card.Title>Workday Scheduler</Card.Title>

              <React.Fragment> {TextContent[2]} </React.Fragment>

              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Moment.js</li>
                    <li>Photoshop</li>
                  </ul>
                </ListGroup.Item>
                {/* <ListGroupItem>Links:</ListGroupItem> */}
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://jaliov.github.io/Word-Day-Scheduler/"
                target="blank"
                text="light"
              >
                Workday Scheduler
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/Word-Day-Scheduler"
              >
                GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Row>

      <Row>
        <CardDeck>
          <Card style={CardStyles} className={CardClasses}>
            <Card.Img variant="top" src={ViolinClassicsImg} />
            <Card.Body>
              <Card.Title>Violin Classics</Card.Title>

              <React.Fragment> {TextContent[6]} </React.Fragment>

              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>MYSQL/PDO</li>
                    <li>Gimp</li>
                  </ul>
                </ListGroup.Item>
                {/* <ListGroupItem>Links:</ListGroupItem> */}
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://violin-classics-mvc.herokuapp.com/index.php"
                target="blank"
                text="light"
              >
                Violin Classics
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/Violin_Classics_mvc"
              >
                GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Col md={1}></Col>
          {/* Lisa */}
          <Card className={CardClasses} style={CardStyles}>
            <Card.Img variant="top" src={FlamencoSiteImg} />
            <Card.Body>
              <Card.Title>Lisa Botalico Flamenco!</Card.Title>

              <React.Fragment> {TextContent[4]} </React.Fragment>

              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>React-Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Simple React Lightbox</li>
                    <li>Gimp</li>
                  </ul>
                </ListGroup.Item>
                {/* <ListGroupItem>Links:</ListGroupItem> */}
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://lisabflamenco.herokuapp.com/"
                target="blank"
                text="light"
              >
                Flamenco!
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/lisabflamenco"
              >
                GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Col md={1}></Col>

          {/*  */}

          {/* Burger Logger */}
          <Card className={CardClasses} style={CardStyles}>
            <Card.Img variant="top" src={BurgerLoggerImg} />
            <Card.Body>
              <Card.Title>Burger-Logger</Card.Title>

              <React.Fragment> {TextContent[5]} </React.Fragment>

              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>Javascript</li>
                    <li>Handlebars</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>CSS</li>
                  </ul>
                </ListGroup.Item>
                {/* <ListGroupItem>Links:</ListGroupItem> */}
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://order-burgers-log.herokuapp.com/"
                target="blank"
                text="light"
              >
                Burger-Logger
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/Burger-Logger"
              >
                GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Row>
      <Row>
        <CardDeck>
          <Col md={4}>
            <Card className={CardClasses} style={CardStyles}>
              <Card.Img variant="top" src={VistaImage} />
              <Card.Body>
                <Card.Title>Joel Rudin Art</Card.Title>

                <React.Fragment> {TextContent[7]} </React.Fragment>

                <ListGroup>
                  <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                  <ListGroup.Item variant="light">
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                      <li>fancyBox Lightbox</li>
                      <li>Photoshop</li>
                    </ul>
                  </ListGroup.Item>
                  {/* <ListGroupItem>Links:</ListGroupItem> */}
                </ListGroup>
              </Card.Body>
              <Card.Body>
                <Button
                  variant="danger"
                  href="https://jaliov.github.io/JoelRudinArt/"
                  target="blank"
                  text="light"
                >
                  Joel Rudin Art
                </Button>
                <Button
                  variant="info"
                  href="https://github.com/Jaliov/JoelRudinArt"
                >
                  GitHub
                </Button>
              </Card.Body>
              {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
            </Card>
          </Col>
          <Col md={1}></Col>
        </CardDeck>
      </Row>
    </Container>
  );
};

export default CardDisplay;
