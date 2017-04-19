import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { container } from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', isAuthenticated: false };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      this.props.onAuthenticateAction(this.state.inputValue);
      window.localStorage.setItem('name', this.state.inputValue);
      this.setState({ inputValue: '', isAuthenticated: true });
    }
  }

  onChange({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (
        <div className={container}>
          <input
            value={this.state.inputValue}
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
};

export default Login;
