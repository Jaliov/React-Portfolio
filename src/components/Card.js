import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CodeQuizImg from "./images/Code_QuizImage.jpg";

import HmanImage from "./images/fanPageImage.jpg";
import FlipCardsImg from "./images/FlipcardsImage.jpg";
import WeatherAppImg from "./images/WeatherAppImage.jpg";
import HipGrandpaImg from "./images/HipGrandpaImage.jpg";
// import PasswordImg from "./images/PasswordGenImage.jpg";
// import SurveyFormImg from "./images/SurveyFormImage.jpg";
import WorkdaySchl from "./images/WorkdayScheduler.jpg";
import FlamencoSiteImg from "./images/LisabflamencoScreenshot.jpg";
import YellowChatImg from "./images/yellowChatScreenshot.jpg";
import BurgerLoggerImg from "./images/Burger-Logger.jpg";

function CardDisplay() {
  return (
    <Container>
    
      <Row>
        <h1
          class="bg-light"
          style={{ fontWeight: "bold", marginTop: "30px", padding: "10px" }}
        >
          Portfolio
        </h1>
        <CardDeck>
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" src={CodeQuizImg} />
            <Card.Body>
              <Card.Title>Viola Quiz!</Card.Title>
              <Card.Text>
                In this little quiz app you can test your knowledge of a musical
                instrument unknown to many--the viola! The user
                first enters his/her initials which are stored in local storage.
                Click the 'Start' button and a multiple choice question loads.
                Once answered, it disappears, and a new question loads. Your score
                appears at bottom as a timer counts down-- you have sixty
                seconds! Once completed, final score is stored, quiz resets.
              </Card.Text>
              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                  </ul>
                </ListGroup.Item>
                <ListGroupItem>Links:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://jaliov.github.io/Code-Quiz/"
                target="blank"
                text="light"
              >
                Viola Quiz!
              </Button>
              <Button variant="info" href="https://github.com/Jaliov/Code-Quiz">
               GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>

          <Col md={1}></Col>

          {/* Weather-Map */}
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" src={WeatherAppImg} />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                A convenient Weather API that displays the current weather in
                cities throughout the world as well as a 5 day forecast. Enter a
                city in the search field, and a full list of weather stats load,
                temperature, humidity, windspeed, and UVIndex (color coded!).
                Down below, see the five day forecast with applicable icons!
              </Card.Text>
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
                <ListGroupItem>Links:</ListGroupItem>
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
          {/* </CardDeck>
{/*  */}

          {/* <CardDeck> */}
          {/* Burger Logger */}
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" img src={WorkdaySchl} />
            <Card.Body>
              <Card.Title>Workday Scheduler</Card.Title>
              <Card.Text>
                A simple calendar application that allows the user to save
                events for each hour of the day. Timeblocks represent standard
                business hours, color coded to indicate whether it is in the
                past, present, or future. Click into a timeblock and enter an
                event. The save button saves the text for the event in local
                storage. When the page is refreshed, the saved events persist.
              </Card.Text>
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
                <ListGroupItem>Links:</ListGroupItem>
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

          {/* <Col md={1}></Col> */}
        </CardDeck>
      </Row>

      <Row>
        <CardDeck>
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" src={FlipCardsImg} />
            <Card.Body>
              <Card.Title>FlipCards</Card.Title>
              <Card.Text>
                Team project: I was the frontend designer.
                <br />A website designed to test the computer student's coding
                knowledge using a virtual flashcards style interface. Useful for
                interview prep. Four different sections with four different
                languages.
              </Card.Text>
              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Express</li>
                    <li>Express Handlebars</li>
                    <li>mySQL</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>ORM</li>
                    <li>Photoshop</li>
                  </ul>
                </ListGroup.Item>
                <ListGroupItem>Links:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="http://flipcards2020.herokuapp.com/"
                target="blank"
                text="light"
              >
                Viola Quiz!
              </Button>
              <Button variant="info" href="https://github.com/Jaliov/flipcards">
               GitHub
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>

          <Col md={1}></Col>

          {/* Lisa */}
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" src={FlamencoSiteImg} />
            <Card.Body>
              <Card.Title>Lisa Botalico Flamenco!</Card.Title>
              <Card.Text>
                The website of the great flamenco dancer and singer Lisa
                Botalico! First created in 2011 the site has been updated
                over the years and retooled recently based on methods acquired at
                Rutgers coding bootcamp, 2020. The site includes numerous
                photos, a bio section, reviews, useful links, and upcoming
                events. Coming soon: audios and videos! Publised on goDaddy.com
              </Card.Text>
              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Photoshop</li>
                  </ul>
                </ListGroup.Item>
                <ListGroupItem>Links:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://jaliov.github.io/lisabflamenco/"
                target="blank"
                text="light"
              >
                Lisa Botalico Flameno
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
          {/* </CardDeck>
{/*  */}

          {/* <CardDeck> */}
          {/* Burger Logger */}
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" img src={BurgerLoggerImg} />
            <Card.Body>
              <Card.Title>Burger-Logger</Card.Title>
              <Card.Text>
                "Eat-Da-Burger!" is a restaurant app that lets users input the
                names of burgers they'd like to eat. Whenever a user submits a
                burger's name, the burger is displayed on the left side of the
                page -- waiting to be devoured. Each burger in the waiting area
                also has a 'Devour it!' button. When the user clicks it, the
                burger will move to the right side of the page. Every burger is
                stored in a database, whether devoured or not.
              </Card.Text>
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
                <ListGroupItem>Links:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://order-burgers-log.herokuapp.com/"
                target="blank"
                text="light"
              >
                Viola Quiz!
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
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" img src={HipGrandpaImg} />
            <Card.Body>
              <Card.Title>Hip Grandpa</Card.Title>
              <Card.Text>
                Team Project: I was primarily frontend designer.<br /> Hip Grandpa was
                created to help users with the difficult task of keeping up with
                today's fast paced technological trends and innovations. Its
                goal is to make everyone tech savvy with special emphasis on the
                older generations.
              </Card.Text>
              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Materialize</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>API</li>
                    <li>Photoshop</li>
                  </ul>
                </ListGroup.Item>
                <ListGroupItem>Links:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://jaliov.github.io/hipGrandpa/"
                target="blank"
                text="light"
              >
                Hip Grandpa!
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/hipGrandpa"
              >
                 GitHub
              </Button>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
          </Card>

          <Col md={1}></Col>
          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" src={HmanImage} />
            <Card.Body>
              <Card.Title>React Violinist Fan Page!</Card.Title>
              <Card.Text>
                 Jascha Heifetz is universally considereed the greatest violinist that ever lived, so I made fan page about him! This is an updated React version of a combo freeCodeCamp project pre-work assignment for Rutgers bootcamp.
              </Card.Text>
              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>

                    <li>REACT</li>
                    <li>Node</li>
                    <li>JavaScript</li>
                    <li>CSS</li>

                  </ul>
                </ListGroup.Item>
                <ListGroupItem>Links:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://jaliov.github.io/react-heifetz/"
                target="blank"
                text="light"
              >
                Violinist Fan Page
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/react-heifetz">
                 GitHub
              </Button>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
          </Card>

          <Col md={1}></Col>

          <Card
            border="danger"
            bg="dark"
            text="light"
            style={{
              marginTop: "20px",
              boxShadow: "15px 10px 10px rgb(75, 63, 60)",
            }}
          >
            <Card.Img variant="top" img src={YellowChatImg} />
            <Card.Body>
              <Card.Title>YELLOWChat</Card.Title>
              <Card.Text>
              Team project, I was the frontend designer. <br />
              YELLOWChat is a MERN site designed to bring small businesses and customers together. YellowChat's engine is a specialty blog for small shops and vendors to keep in contact with their local hometown customer base under any conditions. Customers will have direct access to shop owners.
              The coronavirus pandemic launched the idea that small main street shop owners needed a means to keep in contact with their customers.
              </Card.Text>
              <ListGroup>
                <ListGroup.Item variant="dark">Built with: </ListGroup.Item>
                <ListGroup.Item variant="light">
                  <ul>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React Bootstrap</li>
                    <li>JMaterialize CSS</li>
                    <li>Nodejs</li>
                    <li>Moment.js</li>
                    <li>Passport</li>
                    <li>Passport</li>
                    <li>Photoshop</li>
                    </ul>
    
                </ListGroup.Item>
                {/* <ListGroupItem>Links:</ListGroupItem> */}
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://powerful-mesa-31585.herokuapp.com/"
                target="blank"
                text="light"
              >
                YELLOWChat
              </Button>
              <Button
                variant="info"
                href="https://github.com/Jaliov/yellow-chat"
              >
                 GitHub
              </Button>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
          </Card>
        </CardDeck>
      </Row>
    </Container>
  );
}

export default CardDisplay;
