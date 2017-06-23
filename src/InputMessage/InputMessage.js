import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { container, input } from './InputMessage.css';

class InputMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
      this.props.onSubmit(window.localStorage.getItem('name'), this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }

  onChange({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  render() {
    return (
      <div className={container}>
        <input
          className={input}
          value={this.state.inputValue}
          onChange={event => this.onChange(event)}
          onKeyPress={event => this.onEnter(event)}
        />
      </div>
    );
  }
}

InputMessage.propTypes = {
  onSubmit: PropTypes.func,
};

InputMessage.defaultProps = {
  onSubmit: () => {},
};

export default InputMessage;
