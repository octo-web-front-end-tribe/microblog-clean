import React, {Component} from 'react';
import {item, author, content} from './Message.css'

class Message extends Component {
  render() {
    return (
      <li className={ item }>
        <div className={ author}>
          { this.props.message.author }
        </div>
        <div className={ content }>
          { this.props.message.content }
        </div>
      </li>
    )
  }
}

export default Message