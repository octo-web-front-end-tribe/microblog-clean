import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { container } from './Login.css';

class Login extends Component {
  onEnter({ key }) {
    if (key === 'Enter') {
      this.props.onAuthenticateAction(this.props.login);
      window.localStorage.setItem('name', this.props.login);
    }
  }

  onChange({ target: { value } }) {
    this.props.onUpdateLoginAction(value);
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div className={container}>
          <input
            value={this.props.login}
            onChange={event => this.onChange(event)}
            onKeyPress={event => this.onEnter(event)}
          />
        </div>
      );
    }
    return (<Redirect to="/" />);
  }
}

Login.propTypes = {
  onAuthenticateAction: PropTypes.func.isRequired,
  onUpdateLoginAction: PropTypes.func.isRequired,
  login: PropTypes.string,
  isAuthenticated: PropTypes.boolean,
};

Login.defaultProps = {
  login: '',
  isAuthenticated: false,
};

export default Login;
