import React from 'react'
import PropTypes from 'prop-types'
import {item, author, content} from './Message.css'

const Message = ({message}) => (
  <li className={ item }>
    <div className={[author, 'author'].join(' ')}>{ message.author }</div>
    <div className={[content, 'content'].join(' ')}>{ message.content }</div>
  </li>
);

Message.propTypes = {
  message : PropTypes.shape({
    id : PropTypes.string,
    author : PropTypes.string,
    content : PropTypes.string,
  }),
};

Message.defaultProps = {
  message : {},
};

export default Message
