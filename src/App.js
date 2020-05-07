// eslint-disable-next-line
import React, { Component } from "react";
import CardDisplay from "./components/Card";
import ShowBio from "./components/Bio";
// import Home from "./components/Home";
import Bio from "./components/Bio";

import ContactInfo from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavElement from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavElement></NavElement>

          <Route exact path="/" component={Bio}></Route>

          <Route exact path="/home" component={ShowBio}></Route>

          <Route exact path="/portfolio" component={CardDisplay}></Route>

          <Route exact path="/contact" component={ContactInfo}></Route>
        </div>
      </Router>
    );
  }
}
export default App;
