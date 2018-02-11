import React, { Component } from 'react';
import Menu from '../Menu';

class MyOrdersPage extends Component {
  FilterOrder = e => {
    e.preventDefault();
    console.log('FilterOrder', e.target.cnpj.value);
    // e.target.order.value

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
        <h1>Meus pedidos - Empresa Druptec Soluções</h1>
        <form onSubmit={this.FilterOrder}>
          <div className="form-fields">
            <div>
              <label className="form-label" htmlFor="cnpj">
                CNPJ:
              </label>
              <input className="form-input" id="cnpj" type="text" />
            </div>
            <div>
              <label className="form-label" htmlFor="order">
                Pedido:
              </label>
              <input className="form-input" id="order" type="text" />
            </div>
            <div>
              <label className="form-label" htmlFor="filter" />
              <button id="filter">Filtrar</button>
            </div>
          </div>
        </form>
        <div className="list-order">
          <table>
            <thead>
              <tr>
                <th>Código do Pedido</th>
                <th>Itens do pedido</th>
                <th>Ações</th>
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

export default MyOrdersPage;
