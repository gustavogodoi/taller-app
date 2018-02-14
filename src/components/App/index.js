import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { withFirebase } from 'react-redux-firebase';

import NewAccountPage from '../NewAccountPage';
import DashboardPage from '../DashboardPage';
import MyAccountPage from '../MyAccountPage';
import NewCompanyPage from '../NewCompanyPage';
import NewOrderPage from '../NewOrderPage';
import MyOrdersPage from '../MyOrdersPage';
import LoginPage from '../LoginPage';
import Logout from '../Logout';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      logged: false,
    };
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loading: false, authenticated: true });
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }

  componentWillMount() {
    this.logged = (
      <Switch>
        <Route exact path="/meus-pedidos/:id" component={MyOrdersPage} />
        <Route exact path="/nova-empresa" component={NewCompanyPage} />
        <Route exact path="/novo-pedido" component={NewOrderPage} />
        <Route exact path="/minha-conta" component={MyAccountPage} />
        <Route exact path="/logout" component={Logout} />
        <Route parth="/dashboard" component={DashboardPage} />
      </Switch>
    );

    this.login = (
      <Switch>
        <Route exact path="/nova-conta" component={NewAccountPage} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/" component={LoginPage} />
      </Switch>
    );
  }

  render() {
    let routes;
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (this.state.authenticated) {
      routes = this.logged;
    } else {
      routes = this.login;
    }

    return <div>{routes}</div>;
  }
}

export default withFirebase(App);
