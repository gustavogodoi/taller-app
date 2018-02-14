import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <NavLink
          to="/"
          exact
          className="menu__item"
          activeClassName="menu__item--selected"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/nova-empresa"
          className="menu__item"
          activeClassName="menu__item--selected"
        >
          Cadastrar nova empresa
        </NavLink>
        <NavLink
          to="/novo-pedido"
          className="menu__item"
          activeClassName="menu__item--selected"
        >
          Novo pedido
        </NavLink>
        <NavLink
          to="/minha-conta"
          className="menu__item"
          activeClassName="menu__item--selected"
        >
          Minha conta
        </NavLink>
        <NavLink
          to="/logout"
          className="menu__item"
          activeClassName="menu__item--selected"
        >
          Sair
        </NavLink>
      </div>
    );
  }
}

export default Menu;
