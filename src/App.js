// eslint-disable-next-line
import React, { Component } from 'react';
import CardDisplay from './components/Card';
import ShowBio from './components/Home';
import ContactInfo from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavElement from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <div>
          <NavElement />

          <Route exact path='/' component={ShowBio}></Route>

          <Route exact path='/home' component={ShowBio}></Route>

          <Route exact path='/portfolio' component={CardDisplay}></Route>

          <Route exact path='/contact' component={ContactInfo}></Route>
        </div>
      </Router>
    );
  }
}
export default App;
