import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Index from './components/Index.jsx';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
        </Router>
      </>
    )
  }
}

