import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputMessage from '../InputMessage/InputMessage';
import MessageList from '../MessageList/MessageList';
import { container, messageBox } from './App.css';

class App extends Component {
  componentDidMount() {
    return this.refresh();
  }

  refresh() {
    this.props.loadMessages();
  }

  render() {
    return (
      <div className={container}>
        <div className={messageBox}>
          <InputMessage onSubmit={this.props.saveMessage} />
          <MessageList messages={this.props.messages} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loadMessages: PropTypes.func.isRequired,
  saveMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default App;
