import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { toast, ToastContainer } from 'react-toastify';
import Menu from '../Menu';

class MyOrdersPage extends Component {
  componentWillMount() {
    this.companyId = this.props.match.params.id;
  }

  CancelOrder = orderId => {
    this.props.firebase
      .remove(`companies/${this.companyId}/pedidos/${orderId}`)
      .then(() => {
        toast.success('Pedido Cancelado!', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  render() {
    if (!isLoaded(this.props.companies)) {
      return <div>Loading...</div>;
    }

    const orders = !this.props.companies[this.companyId].pedidos
      ? {}
      : this.props.companies[this.companyId].pedidos;

    const companyName = this.props.companies[this.companyId].nome_fantasia;

    return (
      <div>
        <ToastContainer />
        <div>
          <Menu />
        </div>
        <h1>{`Meus pedidos - ${companyName}`}</h1>
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
