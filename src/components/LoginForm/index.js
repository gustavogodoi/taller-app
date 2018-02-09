import React from 'react';
import './LoginForm.css';

const LoginForm = ({ description, fields, actions, submit }) => (
  <div className="form-wrapper">
    <form className="form-form" onSubmit={submit}>
      <div className="form-description">{description}</div>
      <div className="form-form__body">
        {fields.map(field => (
          <div key={field.name} className="form-fields">
            <label className="form-label" htmlFor={field.name}>
              {`${field.text}:`}
            </label>
            <input className="form-input" id={field.name} type={field.type} />
          </div>
        ))}
        <div className="form-action">
          {actions.map(action => (
            <button
              key={action.text}
              className="form-button"
              onClick={action.callback}
            >
              {action.text}
            </button>
          ))}
        </div>
      </div>
    </form>
  </div>
);

export default LoginForm;
