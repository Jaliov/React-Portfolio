// eslint-disable-next-line
import React, { Component } from "react";
import CardDisplay from "./components/Card";
import ShowBio from "./components/Bio";
import ContactInfo from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './components/Style.css';
//import Portfolio from "./components/Portfolio";
import NavElement from "./components/Home";
//import Code_QuizImage from './images/Code_QuizImage.jpg'
//import storefrontsColorizedTexture from "./components/images/storefrontsColorizedTexture.jpg"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
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
