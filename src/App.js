// eslint-disable-next-line
import React, { Component } from "react";
import CardDisplay from "./components/Card";
import ShowBio from "./components/Bio";
import ContactInfo from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavElement from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
       basename={"/React-Portfolio"} 
        <div>
          <NavElement></NavElement>
          {/* <Route exact path="/" component = {}></Route> */}
          {/* < navElement />  */}

          <Route exact path="/portfolio" component={CardDisplay}></Route>
          <Route exact path="/home" component={ShowBio}></Route>
          <Route exact path="/contact" component={ContactInfo}></Route>
        </div>
      </Router>
    );
  }
}
export default App;
