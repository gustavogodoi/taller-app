import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { toast, ToastContainer } from 'react-toastify';
import Menu from '../Menu';
import { validarCNPJ } from '../Validation';

class NewCompanyPage extends Component {
  NewCompany = e => {
    e.preventDefault();
    const { nome_fantasia } = e.target;
    const cnpj = e.target.cnpj.value.replace(/[^\d]+/g, '');

    if (!nome_fantasia.value) {
      toast.error(`Erro: Nome inválido`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (!validarCNPJ(cnpj)) {
      toast.error(`Erro: CNPJ inválido`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      this.props.firebase
        .push('companies', {
          nome_fantasia: nome_fantasia.value,
          cnpj: cnpj,
          pedidos: [],
        })
        .then(() => {
          this.props.history.push('/dashboard');
        });
    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <div>
          <Menu />
        </div>
        <h1>Cadastro de empresa</h1>
        <form onSubmit={this.NewCompany}>
          <div className="form-fields">
            <label
              className="form-label form-label--big"
              htmlFor="nome_fantasia"
            >
              Nome Fantasia:
            </label>
            <input className="form-input" id="nome_fantasia" type="text" />
          </div>
          <div className="form-fields">
            <label className="form-label form-label--big" htmlFor="cnpj">
              CNPJ:
            </label>
            <input className="form-input" id="cnpj" type="text" />
          </div>
          <div>
            <button>Cadastrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withFirebase(NewCompanyPage);
