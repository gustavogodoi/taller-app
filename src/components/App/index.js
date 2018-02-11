import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NewAccountPage from '../NewAccountPage';
import DashboardPage from '../DashboardPage';
import MyAccountPage from '../MyAccountPage';
import NewCompanyPage from '../NewCompanyPage';
import NewOrderPage from '../NewOrderPage';
import MyOrdersPage from '../MyOrdersPage';
import LoginPage from '../LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/meus-pedidos/:id" component={MyOrdersPage} />
          <Route exact path="/nova-empresa" component={NewCompanyPage} />
          <Route exact path="/novo-pedido" component={NewOrderPage} />
          <Route exact path="/minha-conta" component={MyAccountPage} />
          <Route exact path="/nova-conta" component={NewAccountPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
