import React from 'react';
import Card from 'react-bootstrap/Card';

const TextContent = [
  <Card.Text>
    In this little quiz app you can test your knowledge of a musical instrument
    little known to many--the viola! The user first enters his/her initials which are
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
    created in 2011 the site has been updated over the years and twice refactored based on technologies learned at Rutgers coding bootcamp, 2020. Most recently I tansitioned the site from vanilla JavaScript to React!
    The
    site includes numerous photos, now displayed in an updated React lightbox, a bio section, reviews, useful links, and
    the recent addition, as of May, 2021 of a video page!
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
    A chronological survey of famous concertos for violin and orchestra with embedded YouTubes of some of the world's greatest violinists, past and present, performing them. The user can click on the title button to see info about the particular piece, or hover over the violinist or composer's name buttons to reveal popover bios of the particular soloist and/or composer. 
  </Card.Text>,

  <Card.Text>
    This is a reboot of my artist website, first created in 2012! Featured are my imaginary, ethereal landscapes in pastel/mixed media created over the last decade. 
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
    <p className='App-intro'>
      He designed his first websites in 2011 using HTML, CSS and JavaScript and
      recently updated them with the technologies learned at
      bootcamp. He has a passion for frontend design and is always seeking to
      make the UI more unique and aethetic, as well as user friendly. Besides
      HTML, CSS and JavaScript, he is also proficient React, jQuery, and on the
      backend Node.js, MySql, MongoDB and Mongoose and more recently PHP.{' '}
    </p>
  </React.Fragment>,
];

export default TextContent;
