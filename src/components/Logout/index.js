import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';

class Logout extends Component {
  componentDidMount() {
    this.props.history.push('/');
  }

  render() {
    this.props.firebase.logout();
    return <div>Logout...</div>;
  }
}

export default withFirebase(Logout);
