import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';

class DashboardPage extends Component {
  render() {
    const minhasEmpresas = [
      {
        id: 1,
        nome_fantasia: 'Druptec Soluções',
        cnpj: '28.354.669/0001-09',
        qtd_pedidos: 1,
      },
      {
        id: 2,
        nome_fantasia: 'PasquePag',
        cnpj: '34.763.818/0001-88',
        qtd_pedidos: 0,
      },
    ];

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
              {minhasEmpresas.map(empresa => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
