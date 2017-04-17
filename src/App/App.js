import React from 'react';
import MessageList from '../MessageList/MessageList';
import { container, messageBox } from './App.css';

const App = () => (
  <div className={container}>
    <div className={messageBox}>
      <MessageList />
    </div>
  </div>
);

export default App;
