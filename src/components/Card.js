import React from "react";
import {
  Card,
  CardDeck,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge
} from "react-bootstrap";
import CodeQuizImg from "./images/Code_QuizImage.jpg";
import HmanImage from "./images/fanPageImage.jpg";
import FlipCardsImg from "./images/FlipcardsImage.jpg";
import WeatherAppImg from "./images/WeatherAppImage.jpg";
import HipGrandpaImg from "./images/HipGrandpaImage.jpg";
import WorkdaySchl from "./images/WorkdayScheduler.jpg";
import FlamencoSiteImg from "./images/LisabflamencoScreenshot.jpg";
import YellowChatImg from "./images/yellowChatScreenshot.jpg";
import BurgerLoggerImg from "./images/Burger-Logger.jpg";
import TextContent from "./TextContent";

const CardStyles = {
  marginTop: "20px",
  paddingTop: "20px",
  boxShadow: "15px 10px 10px rgb(75, 63, 60, 0.7)",
};
const CardClasses = "border border-danger bg-dark text-light";

const CardDisplay = () => {
 
  return (
    <Container>
      <Row>
      <h1 style = {{fontWeight: "bold"}}> 
      <Badge variant = "light" style= {{ marginTop: "40px", padding: "10px", color: "rgb(137, 224, 220)" }} >  
          Portfolio 
         
          </Badge>
          </h1>  
        <CardDeck>
          <Card style={ CardStyles } className = { CardClasses }>
            <Card.Img variant="top" src={CodeQuizImg} />
            <Card.Body>
              <Card.Title>Viola Quiz!</Card.Title>

              <React.Fragment> { TextContent[0] } </React.Fragment>

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
          <Card className={ CardClasses } style={ CardStyles }>
            <Card.Img variant="top" src={WeatherAppImg} />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>

              <React.Fragment> { TextContent[1] } </React.Fragment>
              
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
            <Card.Img variant="top" img src={WorkdaySchl} />
            <Card.Body>
              <Card.Title>Workday Scheduler</Card.Title>
              
              <React.Fragment> { TextContent[2] } </React.Fragment>

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

          {/* <Col md={1}></Col> */}
        </CardDeck>
      </Row>

      <Row>
        <CardDeck>
          <Card className={CardClasses} style={CardStyles}>
            <Card.Img variant="top" src={FlipCardsImg} />
            <Card.Body>
              <Card.Title>FlipCards</Card.Title>

              <React.Fragment> { TextContent[3] } </React.Fragment>
             
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
                {/* <ListGroupItem>Links:</ListGroupItem> */}
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
          <Card className={CardClasses} style={CardStyles}>
            <Card.Img variant="top" src={FlamencoSiteImg} />
            <Card.Body>
              <Card.Title>Lisa Botalico Flamenco!</Card.Title>

              <React.Fragment> { TextContent[4] } </React.Fragment>
            
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
                {/* <ListGroupItem>Links:</ListGroupItem> */}
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                href="https://jaliov.github.io/lisabflamenco/"
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
          {/* </CardDeck>
{/*  */}

          {/* <CardDeck> */}
          {/* Burger Logger */}
          <Card className={CardClasses} style={CardStyles}>
            <Card.Img variant="top" img src={BurgerLoggerImg} />
            <Card.Body>
              <Card.Title>Burger-Logger</Card.Title>

              <React.Fragment> { TextContent[5] } </React.Fragment>
             
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
          <Card border="danger" bg="dark" text="light" style={ CardStyles }>
            <Card.Img variant="top" img src={ HipGrandpaImg } />
            <Card.Body>
              <Card.Title>Hip Grandpa</Card.Title>

              <React.Fragment> { TextContent[6] } </React.Fragment>
             
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
                {/* <ListGroupItem>Links:</ListGroupItem> */}
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
          <Card className={ CardClasses } style={ CardStyles }>
            <Card.Img variant="top" src={ HmanImage } />
            <Card.Body>
              <Card.Title>React Violinist Fan Page!</Card.Title>

              <React.Fragment> { TextContent[7] } </React.Fragment>
             
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
                {/* <ListGroupItem>Links:</ListGroupItem> */}
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
                href="https://github.com/Jaliov/react-heifetz"
              >
                GitHub
              </Button>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
          </Card>

          <Col md={1}></Col>

          <Card className={ CardClasses } style={ CardStyles }>
            <Card.Img variant="top" img src={YellowChatImg} />
            <Card.Body>
              <Card.Title>YELLOWChat</Card.Title>

              <React.Fragment> { TextContent[7] } </React.Fragment>
             
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
  )         
}

export default CardDisplay;