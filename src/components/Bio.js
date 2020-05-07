import React from "react";
import JoelImage from "./images/JoelatBarron_2016cropped.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Home from "./Home";

function ShowBio() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1 className="p-2 font-weight-bold">About Me</h1>
                </ListGroup.Item>
              </ListGroup>
              <img
                className="d-inline p-2 float-left"
                src={JoelImage}
                height="200"
                width="150"
                alt="Joel Rudin Portrait"
              />
              <p>
                <strong>Joel Rudin</strong> is a professional musician who
                creates websites, does graphic design and makes art. He holds a
                certificate from the <br />
                <strong> Rutgers Full Stack Coding Bootcamp</strong>, April,
                2020
              </p>
              He designed his first websites in 2011 using HTML, CSS and
              JavaScript and is currently in the process of updating these
              utilizing the advanced technologies learned at bootcamp. He has a
              passion for frontend design and is always seeking to make the UI
              more unique and aethetic, as well as user friendly. Besides HTML,
              CSS and JavaScript, he is also proficient React, jQuery, and on
              the backend Node.js, MySql, Axios, Mongo and Mongoose.
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ShowBio;
