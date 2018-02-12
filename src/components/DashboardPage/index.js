import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Menu from '../Menu';

class DashboardPage extends Component {
  render() {
    const minhasEmpresas = !isLoaded(this.props.companies)
      ? []
      : isEmpty(this.props.companies) ? [] : this.props.companies;

    return (
      <div>
        <div>
          <Menu />
        </div>
        <h1>Dashboard</h1>
        <h3>Minhas empresas</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nome Fantasia</th>
                <th>CNPJ</th>
                <th>Qtd de Pedidos</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(minhasEmpresas).map((key, id) => {
                const empresa = minhasEmpresas[key];
                return (
                  <tr key={id}>
                    <td>{empresa.nome_fantasia}</td>
                    <td>{empresa.cnpj}</td>
                    <td>
                      {empresa.pedidos === 0 ? (
                        'Nenhum'
                      ) : (
                        <Link to={`/meus-pedidos/${empresa.id}`}>
                          {empresa.pedidos}
                        </Link>
                      )}
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
)(DashboardPage);
