import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <NavLink to="/dashboard" className="menu__item">
          Dashboard
        </NavLink>
        <NavLink to="/nova-empresa" className="menu__item">
          Cadastrar nova empresa
        </NavLink>
        <NavLink to="/novo-pedido" className="menu__item">
          Novo pedido
        </NavLink>
        <NavLink to="/minha-conta" className="menu__item">
          Minha conta
        </NavLink>
        <NavLink to="/" className="menu__item">
          Sair
        </NavLink>
      </div>
    );
  }
}

export default Menu;
