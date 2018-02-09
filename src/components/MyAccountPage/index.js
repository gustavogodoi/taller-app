import React, { Component } from 'react';
import Menu from '../Menu';
import LoginForm from '../LoginForm';
import './MyAccountPage.css';

class MyAccountPage extends Component {
  Cancel = e => {
    e.preventDefault();
    this.props.history.push('/dashboard');
  };

  UpdateAccount = e => {
    e.preventDefault();
    console.log('Update', e.target.email.value);
    //e.target.email.password
    //e.target.email.confirm
  };

  render() {
    const fields = [
      {
        name: 'email',
        text: 'Email',
        type: 'email',
      },
      {
        name: 'password',
        text: 'Senha',
        type: 'password',
      },
      {
        name: 'confirm',
        text: 'Repetir Senha',
        type: 'password',
      },
    ];
    const actions = [
      {
        text: 'Cancelar',
        callback: this.Cancel,
      },
      {
        text: 'Cadastrar',
      },
    ];
    return (
      <div>
        <Menu />
        <div className="myaccount-wrapper">
          <LoginForm
            description="Minha Conta"
            submit={this.UpdateAccount}
            fields={fields}
            actions={actions}
          />
        </div>
      </div>
    );
  }
}

export default MyAccountPage;
