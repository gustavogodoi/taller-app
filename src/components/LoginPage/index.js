import React, { Component } from 'react';
import LoginForm from '../LoginForm';

class LoginPage extends Component {
  NewAccountRedirect = e => {
    e.preventDefault();
    this.props.history.push('/nova-conta');
  };

  Login = e => {
    e.preventDefault();
    console.log('Login', e.target.login.value);
    //e.target.password.value

    this.props.history.push('/dashboard');
  };

  render() {
    const fields = [
      {
        name: 'login',
        text: 'Login',
        type: 'email',
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
        callback: this.NewAccountRedirect,
      },
      {
        text: 'Login',
      },
    ];
    return (
      <LoginForm
        description="Efetue seu login para acessar o sistema"
        submit={this.Login}
        fields={fields}
        actions={actions}
      />
    );
  }
}

export default LoginPage;
