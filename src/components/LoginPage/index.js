import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { toast, ToastContainer } from 'react-toastify';
import LoginForm from '../LoginForm';

class LoginPage extends Component {
  NewAccountRedirect = e => {
    e.preventDefault();
    this.props.history.push('/nova-conta');
  };

  Login = e => {
    e.preventDefault();
    const { login, password } = e.target;

    this.props.firebase
      .login({
        email: login.value,
        password: password.value,
      })
      .then(() => {
        toast.success('Bem vindo!', {
          position: toast.POSITION.TOP_CENTER,
          onClose: () => this.props.history.push('/dashboard'),
          autoClose: 1000,
        });
      })
      .catch(e => {
        toast.error(`Erro: Login ou Senha incorretos`, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
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
        type: 'submit',
      },
    ];
    return (
      <div>
        <ToastContainer />
        <LoginForm
          description="Efetue seu login para acessar o sistema"
          submit={this.Login}
          fields={fields}
          actions={actions}
        />
      </div>
    );
  }
}

export default withFirebase(LoginPage);
