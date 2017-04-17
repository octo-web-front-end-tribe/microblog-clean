import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';
import { container } from './MessageList.css';

const MessageList = ({ messages }) => (
  <ul className={container}>
    { messages.map(currentMessage => <Message key={currentMessage.id} message={currentMessage} />) }
  </ul>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
