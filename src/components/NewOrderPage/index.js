import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFirebase, firebaseConnect, isLoaded } from 'react-redux-firebase';
import Menu from '../Menu';
import './NewOrder.css';

class NewOrderPage extends Component {
  constructor() {
    super();

    this.state = {
      company: undefined,
      order: [],
    };
  }
  addItem = e => {
    e.preventDefault();

    const order = [...this.state.order];
    order.push({
      qtd: e.target.qtd.value,
      product: e.target.product.value,
    });

    this.setState({
      order,
      company: e.target.company.value,
    });

    e.target.qtd.value = null;
    e.target.product.value = null;
  };

  removeItem = index => {
    const order = [...this.state.order];
    order.splice(index, 1);
    this.setState({ order });
  };

  CloseOrder = () => {
    this.props.firebase.push(
      `companies/${this.state.company}/pedidos`,
      this.state.order
    );
    this.props.history.push('/dashboard');
  };

  render() {
    if (!isLoaded(this.props.companies) || !isLoaded(this.props.products)) {
      return <div>Loading...</div>;
    }

    const selectCompanies = Object.keys(this.props.companies).map((key, id) => {
      const company = this.props.companies[key];
      return (
        <option key={key} value={key}>
          {company.nome_fantasia}
        </option>
      );
    });

    const selectProducts = Object.keys(this.props.products).map((key, id) => {
      const product = this.props.products[key];
      return (
        <option key={key} value={product}>
          {product}
        </option>
      );
    });

    return (
      <div>
        <div>
          <Menu />
        </div>
        <h1>Novo Pedido</h1>
        <form onSubmit={this.addItem}>
          <div className="form-fields">
            <select id="company">
              <option>Selecione uma Empresa</option>
              {selectCompanies}
            </select>
          </div>
          <div className="form-fields">
            <div>
              <select id="product">
                <option>Selecione um Produto</option>
                {selectProducts}
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
              {this.state.order.map((order, index) => (
                <tr key={index}>
                  <td>{order.product}</td>
                  <td>{order.qtd}</td>
                  <td>
                    <button onClick={() => this.removeItem(index)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={() => this.CloseOrder()}>Fechar pedido</button>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(['companies', 'products']),
  connect(state => ({
    companies: state.firebase.data.companies,
    products: state.firebase.data.products,
  }))
)(withFirebase(NewOrderPage));
