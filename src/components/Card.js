import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeQuizImg from './images/Code_QuizImage.jpg';
import HmanImage from './images/fanPageImage.jpg'
import FlipCardsImg from './images/FlipcardsImage.jpg'
import WeatherAppImg from './images/WeatherAppImage.jpg'
import HipGrandpaImg from './images/HipGrandpaImage.jpg'
import PasswordImg from './images/PasswordGenImage.jpg'
import SurveyFormImg from './images/SurveyFormImage.jpg'
import WorkdaySchl from './images/WorkdayScheduler.jpg'
import FlamencoSiteImg from './images/LisabflamencoScreenshot.jpg'
import YellowChatImg from './images/yellowChatScreenshot.jpg'


function CardDisplay () { 
  return (   
    <Container>
      
        <Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src={CodeQuizImg} />
  <Card.Body>
    <Card.Title>Survey Form</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href= "https://jaliov.github.io/Code-Quiz/" target="blank">Survey Form</Button>
    <Card.Link href="https://github.com/Jaliov/Code-Quiz"> github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src={WeatherAppImg}  />
  <Card.Body>
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
    </Card.Text>
    
    <Button variant="secondary" href="https://jaliov.github.io/Weather-Map/" target="blank">Weather App</Button>
    <Card.Link href="https://github.com/Jaliov/Weather-Map"> github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
<Card.Img variant="top" img src={WorkdaySchl} />
  <Card.Body>
    <Card.Title>Workday Scheduler</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Word-Day-Scheduler/" target="blank">Workday <br /> Scheduler</Button>
    <Card.Link href="https://github.com/Jaliov/Word-Day-Scheduler"> github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src={PasswordImg}  />
  <Card.Body>
    <Card.Title>Password Generator</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Password-Generator" target="blank">Password <br />Generator</Button>
    <Card.Link href="https://github.com/Jaliov/Password-Generator"> github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src={SurveyFormImg} />
  <Card.Body>
    <Card.Title>Martial Arts Survey Form</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Survey-Form/" target="blank">Survey Form</Button>
    <Card.Link href="https://github.com/Jaliov/Survey-Form"> github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src={HipGrandpaImg} />
  <Card.Body>
    <Card.Title>Hip Grandpa</Card.Title>
    <Card.Text>
      Team project
    </Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/hipGrandpa/" target="blank">HipGrandpa</Button>
    <Card.Link href="https://github.com/Jaliov/hipGrandpa"> github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '23rem' }}>
  <Card.Img variant="top" img src={HmanImage} />
  <Card.Body>
    <Card.Title>Violinist Fan Page!</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/violinist-fanPage/" target="blank">Fan Page</Button>
    <Card.Link href="https://jaliov.github.io/violinist-fanPage/"> github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '23rem' }}>
  <Card.Img variant="top" img src={FlipCardsImg}  />
  <Card.Body>
    <Card.Title>FlipCards</Card.Title>
    <Card.Text>
      Team project
    </Card.Text>
    <Button variant="secondary" href="http://flipcards2020.herokuapp.com/" target="blank">FlipCards</Button>
    <Card.Link href="https://github.com/Jaliov/flipcards"> github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
        <Col  md={2}>
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '23rem' }}>
  <Card.Img variant="top" img src={FlamencoSiteImg} />
  <Card.Body>
    <Card.Title>Lisa Botalico Flamenco!</Card.Title>
    {/* <Card.Text>Published at www.lisabflamenco.com</Card.Text> */}
    <Button variant="secondary" href="https://jaliov.github.io/lisabflamenco/" target="blank">Flamenco</Button>
    <Card.Link href="https://github.com/Jaliov/lisabflamenco"> github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '23rem' }}>
  <Card.Img variant="top" img src={YellowChatImg}  />
  <Card.Body>
    <Card.Title>YELLOWChat</Card.Title>
    <Card.Text>
      Team project
    </Card.Text>
    <Button variant="secondary" href="https://powerful-mesa-31585.herokuapp.com/" target="blank">YELLOWchat</Button>
    <Card.Link href="https://github.com/Jaliov/yellow-chat"> github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
)
    }

    export default CardDisplay
