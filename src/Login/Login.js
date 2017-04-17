import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { container } from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', isAuthenticated: false };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
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

export default Login;
