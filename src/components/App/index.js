import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NewAccountPage from '../NewAccountPage';
import LoginPage from '../LoginPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/nova-conta" component={NewAccountPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
