import React from 'react';
import InputMessage from '../InputMessage/InputMessage';
import MessageList from '../MessageList/MessageList';
import {container, messageBox} from './App.css';

const App = () => (
  <div className={container}>
    <div className={messageBox}>
      <InputMessage />
      <MessageList />
    </div>
  </div>
);

export default App;
