import React, { Component } from 'react';
import LoginForm from '../LoginForm';

class NewAccountPage extends Component {
  Cancel = e => {
    e.preventDefault();
    this.props.history.push('/');
  };

  Register = e => {
    e.preventDefault();
    console.log('Cadastrar', e.target.email.value);
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
      <LoginForm
        description="Novo Cadastro"
        submit={this.Register}
        fields={fields}
        actions={actions}
      />
    );
  }
}

export default NewAccountPage;
