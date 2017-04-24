import React, { Component } from 'react';
import { postMessage } from '../ApiHelper/ApiHelper';
import { container, input } from './InputMessage.css';

class InputMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  onEnter({ key }) {
    if (key === 'Enter') {
    }
  }

  onChange({ target: { value } }) {

  }

  render() {
    return (
      <div className={container}>
        <input
          className={input}
          value={this.state.inputValue}
          onChange={event => ()}
          onKeyPress={event => ()}
        />
      </div>
    );
  }
}

export default InputMessage;
