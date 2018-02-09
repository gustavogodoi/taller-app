import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import LoginPage from '../LoginPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
