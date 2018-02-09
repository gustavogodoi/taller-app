import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="login-form">
          <div className="login-description">
            Efetue seu login para acessar o sistema
          </div>
          <div className="login-form__body">
            <div className="login-fields">
              <label className="login-label" htmlFor="login">
                Login:
              </label>
              <input className="login-input" name="login" type="text" />
            </div>
            <div className="login-fields">
              <label className="login-label" htmlFor="password">
                Password:
              </label>
              <input className="login-input" name="password" type="password" />
            </div>
            <div className="login-action">
              <button className="login-button">Nova Conta</button>
              <button className="login-button">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
