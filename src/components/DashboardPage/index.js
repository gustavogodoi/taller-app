import React, { Component } from 'react';
import Menu from '../Menu';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>
        <h1>Dashboard</h1>
        <h3>Minhas empresas</h3>
        <div>Table here!!!</div>
      </div>
    );
  }
}

export default DashboardPage;
