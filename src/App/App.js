import React from 'react'
import PropTypes from 'prop-types'
import MessageList from '../MessageList/MessageList'
import {container, messageBox} from './App.css'

const App = ({name}) => (
  <div className={container}>
    <div className={[messageBox, 'greeting'].join(' ')}>{`Hello ${name} !`}</div>
    <div className={messageBox}>
      <MessageList messages={[
        {id : '1', author : 'anass', content : 'JS is amazing'},
        {id : '2', author : 'pierrette', content : 'JS is impressive'}
      ]}/>
    </div>
  </div>
);

App.propTypes = {
  name : PropTypes.string,
};

App.defaultProps = {
  name : "OCTO",
};

export default App;
