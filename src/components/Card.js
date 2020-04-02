import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CardDisplay () { 
  return (   
    <Container>
      
        <Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/Code_QuizImage.jpg" />
  <Card.Body>
    <Card.Title>Survey Form</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Code-Quiz/">Survey Form</Button>
    <Card.Link href="https://github.com/Jaliov/Code-Quiz">github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/WeatherAppImage.jpg"  />
  <Card.Body>
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Weather-Map/">Weather App</Button>
    <Card.Link href="https://github.com/Jaliov/Weather-Map">github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/WorkdayScheduler.jpg" />
  <Card.Body>
    <Card.Title>Workday Scheduler</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Word-Day-Scheduler/">Workday <br /> Scheduler</Button>
    <Card.Link href="https://github.com/Jaliov/Word-Day-Scheduler">github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/PasswordGenImage.jpg"  />
  <Card.Body>
    <Card.Title>Password Generator</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Password-Generator">Password <br />Generator</Button>
    <Card.Link href="https://github.com/Jaliov/Password-Generator">github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/SurveyFormImage.jpg" />
  <Card.Body>
    <Card.Title>Martial Arts Survey Form</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/Survey-Form/">Survey Form</Button>
    <Card.Link href="https://github.com/Jaliov/Survey-Form">github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '20rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/HipGrandpaImage.jpg"  />
  <Card.Body>
    <Card.Title>Hip Grandpa</Card.Title>
    <Card.Text>
      Team project
    </Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/hipGrandpa/">HipGrandpa</Button>
    <Card.Link href="https://github.com/Jaliov/hipGrandpa">github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
        <Col  md={2}>
 
    </Col>
<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '23rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/fanPageImage.jpg" />
  <Card.Body>
    <Card.Title>Violinist Fan Page!</Card.Title>
    <Card.Text></Card.Text>
    <Button variant="secondary" href="https://jaliov.github.io/violinist-fanPage/">Fan Page</Button>
    <Card.Link href="https://jaliov.github.io/violinist-fanPage/"> github Repo</Card.Link>
  </Card.Body>
</Card>
</Col>

<Col xs={8} md={4}>
<Card style={{ width: '18rem', height: '23rem' }}>
  <Card.Img variant="top" img src="https://github.com/Jaliov/React-Portfolio/blob/master/public/images/FlipcardsImage.jpg"  />
  <Card.Body>
    <Card.Title>FlipCards</Card.Title>
    <Card.Text>
      Team project
    </Card.Text>
    <Button variant="secondary" href="http://flipcards2020.herokuapp.com/">FlipCards</Button>
    <Card.Link href="https://github.com/Jaliov/flipcards"> github Repo</Card.Link>
  
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
)
    }

export default CardDisplay; 