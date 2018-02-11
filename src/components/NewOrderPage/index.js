import React, { Component } from 'react';
import Menu from '../Menu';
import './NewOrder.css';

class NewOrderPage extends Component {
  NewOrder = e => {
    e.preventDefault();
    console.log('NewOrder', e.target.company.value);

    //this.props.history.push('/dashboard');
  };

  CloseOrder = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>
        <h1>Novo Pedido</h1>
        <form onSubmit={this.NewOrder}>
          <div className="form-fields">
            <select id="company">
              <option>Selecione uma Empresa</option>
            </select>
          </div>
          <div className="form-fields">
            <div>
              <select id="product">
                <option>Selecione um Produto</option>
              </select>
            </div>
            <div>
              <label className="form-label" htmlFor="qtd">
                Qtd:
              </label>
              <input
                className="form-input form-input--small"
                id="qtd"
                type="number"
                min="0"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="cadastrar" />
              <button id="cadastrar">Cadastrar</button>
            </div>
          </div>
        </form>
        <div className="list-order">
          <h3>List de Pedidos</h3>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Qtd</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {/*minhasEmpresas.map(empresa => (
                <tr key={empresa.id}>
                  <td>{empresa.nome_fantasia}</td>
                  <td>{empresa.cnpj}</td>
                  <td>
                    {empresa.qtd_pedidos === 0 ? (
                      'Nenhum'
                    ) : (
                      <Link to={`/meus-pedidos/${empresa.id}`}>
                        {empresa.qtd_pedidos}
                      </Link>
                    )}
                  </td>
                </tr>
              ))*/}
            </tbody>
          </table>
        </div>
        <div>
          <button>Fechar pedido</button>
        </div>
      </div>
    );
  }
}

export default NewOrderPage;
