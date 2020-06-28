import React from 'react';
import Card from 'react-bootstrap/Card';

const TextContent = [
  <Card.Text>
    In this little quiz app you can test your knowledge of a musical instrument
    unknown to many--the viola! The user first enters his/her initials which are
    stored in a database via Mongodb. Click the 'Start' button and a multiple
    choice question loads. Once answered, it disappears, and a new question
    loads. Your score appears at bottom as a timer counts down-- you have sixty
    seconds! Once completed, you can submit your final score and quiz resets.
  </Card.Text>,

  <Card.Text>
    A convenient Weather API that displays the current weather in cities
    throughout the world as well as a 5 day forecast. Enter a city in the search
    field, and a full list of weather stats load, temperature, humidity,
    windspeed, and UVIndex (color coded!). Dig the way the background image
    shifts according to current conditions. Down below, see the five day
    forecast with applicable icons! Want to review the weather stats for a
    particular city? Just click on any of the so-named buttons that load in
    response to each search query.
  </Card.Text>,

  <Card.Text>
    A simple calendar application that allows the user to save events for each
    hour of the day. Timeblocks represent standard business hours, color coded
    to indicate whether it is in the past, present, or future. Click into a
    timeblock and enter an event. The save button saves the text for the event
    in local storage. When the page is refreshed, the saved events persist.
  </Card.Text>,

  <Card.Text>
    Team project: I was the frontend designer.
    <br />A website designed to test the computer student's coding knowledge
    using a virtual flashcards style interface. Useful for interview prep. Four
    different sections with four different languages.
  </Card.Text>,

  <Card.Text>
    The website of the great flamenco dancer and singer Lisa Botalico! First
    created in 2011 the site has been updated over the years and retooled
    recently based on technologies learned at Rutgers coding bootcamp, 2020. The
    site includes numerous photos, a bio section, reviews, useful links, and
    upcoming events. Coming soon: audios and videos! Published on goDaddy.com
  </Card.Text>,

  <Card.Text>
    "Eat-Da-Burger!" is a restaurant app that lets users input the names of
    burgers they'd like to eat. Whenever a user submits a burger's name, the
    burger is displayed on the left side of the page -- waiting to be devoured.
    Each burger in the waiting area also has a 'Devour it!' button. When the
    user clicks it, the burger will move to the right side of the page. Every
    burger is stored in a database, whether devoured or not.
  </Card.Text>,

  <Card.Text>
    Team Project: I was primarily frontend designer.
    <br /> Hip Grandpa was created to help users with the difficult task of
    keeping up with today's fast paced technological trends and innovations. Its
    goal is to make everyone tech savvy with special emphasis on the older
    generations.
  </Card.Text>,

  <Card.Text>
    Jascha Heifetz is universally considereed the greatest violinist that ever
    lived, so I made fan page about him! This is an updated React version of a
    combo freeCodeCamp project and pre-work assignment for Rutgers bootcamp.
  </Card.Text>,

  <Card.Text>
    Team project, I was the frontend designer. <br />
    YELLOWChat is a MERN site designed to bring small businesses and customers
    together. YellowChat's engine is a specialty blog for small shops and
    vendors to keep in contact with their local hometown customer base under any
    conditions. Customers will have direct access to shop owners. The
    coronavirus pandemic launched the idea that small main street shop owners
    needed a means to keep in contact with their customers.
  </Card.Text>,

  //Bio
  <React.Fragment>
    <p>
      <strong>Joel Rudin</strong> is a professional musician who creates
      websites, does graphic design and makes art. He holds a certificate from
      the <br />
      <strong> Rutgers Full Stack Coding Bootcamp</strong>, April, 2020
    </p>
    <p>
      He designed his first websites in 2011 using HTML, CSS and JavaScript and
      is now in the process of updating them with the technologies learned at
      bootcamp. He has a passion for frontend design and is always seeking to
      make the UI more unique and aethetic, as well as user friendly. Besides
      HTML, CSS and JavaScript, he is also proficient React, jQuery, and on the
      backend Node.js, MySql, Mongo and Mongoose.{' '}
    </p>
  </React.Fragment>,
];

export default TextContent;
