import React, {Component} from 'react';
import Message from '../Message/Message'

const message1 = {
  id: 'abcd',
  author: 'abcd',
  content: 'abcd',
}

const message2 = {
  id: 'efgh',
  author: 'efgh',
  content: 'efgh',
}

class MessageList extends Component {
  render() {
    return (
      <div>
        <Message message={message1}/>
        <Message message={message2}/>
      </div>
    )
  }
}

export default MessageList