import React, { Component } from 'react';
import InputMessage from '../InputMessage/InputMessage';
import MessageList from '../MessageList/MessageList';
import { container, messageBox } from './App.css';
import { fetchMessages } from '../ApiHelper/ApiHelper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { messages: [] };
  }

  componentWillMount() {
    return this.refresh();
  }

  refresh() {
  }

  render() {
    return (
      <div className={container}>
        <div className={messageBox}>
          <InputMessage />
          <MessageList messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
