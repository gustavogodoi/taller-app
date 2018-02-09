import React, { Component } from 'react';
import LoginForm from '../LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
  NovaConta = e => {
    e.preventDefault();
    console.log('Nova Conta');
  };

  Login = e => {
    e.preventDefault();
    console.log('Login');
  };

  render() {
    const fields = [
      {
        name: 'login',
        text: 'Login',
        type: 'text',
      },
      {
        name: 'password',
        text: 'Senha',
        type: 'password',
      },
    ];
    const actions = [
      {
        text: 'Nova Conta',
        callback: this.NovaConta,
      },
      {
        text: 'Login',
        callback: this.Login,
      },
    ];
    return (
      <LoginForm
        description="Efetue seu login para acessar o sistema"
        fields={fields}
        actions={actions}
      />
    );
  }
}

export default LoginPage;
