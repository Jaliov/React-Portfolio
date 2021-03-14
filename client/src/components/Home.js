import React, { Fragment } from "react";
import JoelImage from "./images/JoelatBarron_2016cropped.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TextContent from "./TextContent";
// import Home from "./Home";

function ShowBio() {
  return (
    <Fragment>
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
                 <div> { TextContent[9] } </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default ShowBio;
