import React from 'react';
import { container, messageBox } from './App.css';

const App = () => (
  <div className={container}>
    <div className={[messageBox, 'greeting'].join(' ')}>Hello</div>
  </div>
);

export default App;
