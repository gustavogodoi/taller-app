import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { toast, ToastContainer } from 'react-toastify';
import LoginForm from '../LoginForm';

class NewAccountPage extends Component {
  Cancel = e => {
    e.preventDefault();
    this.props.history.push('/');
  };

  Register = e => {
    const { email, password, confirm } = e.target;
    e.preventDefault();
    if (!email.value) {
      toast.error(
        `Erro: O campo 'Email' é obrigatório.`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    } else if (
      password.value &&
      password.value === confirm.value
    ) {

      this.props.firebase
        .createUser({
          email: email.value,
          password: password.value,
        })
        .then(() => {
          toast.success('Novo Cadastro criado!', {
            position: toast.POSITION.TOP_CENTER,
            onClose: () => this.props.history.push('/'),
            autoClose: 1000,
          });
        })
        .catch(e => {
          toast.error(`Erro: ${e.message}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } else {
      toast.error(
        `Erro: Os campos 'Senha' e 'Repetir senha' são obrigatórios e precisam ser iguais.`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
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
        <ToastContainer />
        <LoginForm
          description="Novo Cadastro"
          submit={this.Register}
          fields={fields}
          actions={actions}
        />
      </div>
    );
  }
}

export default withFirebase(NewAccountPage);
