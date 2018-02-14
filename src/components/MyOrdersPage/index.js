import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import Menu from '../Menu';

class MyOrdersPage extends Component {
  componentWillMount() {
    this.companyId = this.props.match.params.id;
  }

  FilterOrder = e => {
    e.preventDefault();
    console.log('FilterOrder', e.target.cnpj.value);
    // e.target.order.value
  };

  CancelOrder = orderId => {
    this.props.firebase.remove(
      `companies/${this.companyId}/pedidos/${orderId}`
    );
  };

  render() {
    if (!isLoaded(this.props.companies)) {
      return <div>Loading...</div>;
    }

    const orders = !this.props.companies[this.companyId].pedidos
      ? {}
      : this.props.companies[this.companyId].pedidos;

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
              {Object.keys(orders).map((key, id) => {
                const order = orders[key];
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>
                      {order.map((item, index) => (
                        <p key={`${item.product}-${index}`}>{`${item.qtd}x ${
                          item.product
                        }`}</p>
                      ))}
                    </td>
                    <td>
                      <button onClick={() => this.CancelOrder(key)}>
                        Cancelar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(['companies']),
  connect(state => ({
    companies: state.firebase.data.companies,
  }))
)(MyOrdersPage);
