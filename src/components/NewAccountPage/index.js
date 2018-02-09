import React, { Component } from 'react';
import LoginForm from '../LoginForm';

class NewAccountPage extends Component {
  Cancelar = e => {
    e.preventDefault();
    this.props.history.push('/');
  };

  Cadastrar = e => {
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
        callback: this.Cancelar,
      },
      {
        text: 'Cadastrar',
      },
    ];
    return (
      <LoginForm
        description="Novo Cadastro"
        submit={this.Cadastrar}
        fields={fields}
        actions={actions}
      />
    );
  }
}

export default NewAccountPage;
