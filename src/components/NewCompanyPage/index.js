import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import Menu from '../Menu';

class NewCompanyPage extends Component {
  NewCompany = e => {
    e.preventDefault();

    this.props.firebase.push('companies', {
      nome_fantasia: e.target.nome_fantasia.value,
      cnpj: e.target.cnpj.value,
      pedidos: [],
    });

    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
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
