import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NewAccountPage from '../NewAccountPage';
import DashboardPage from '../DashboardPage';
import MyAccountPage from '../MyAccountPage';
import LoginPage from '../LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/meus-pedidos/:id" component={DashboardPage} />
          <Route exact path="/minha-conta" component={MyAccountPage} />
          <Route exact path="/nova-conta" component={NewAccountPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
