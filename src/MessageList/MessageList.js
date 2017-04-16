import React, {Component} from 'react';
import Message from '../Message/Message'
import {fetchMessages} from '../ApiHelper/ApiHelper'

class MessageList extends Component {
  constructor(props) {
    super(props)

    this.state = {messages : []}
  }

  componentWillMount() {
    return fetchMessages()
      .then(responseMessages => this.setState({messages : responseMessages}))
  }

  render() {
    const {messages} = this.state

    return (
      <div>
        { messages.map(currentMessage => <Message key={currentMessage.id} message={currentMessage}/>) }
      </div>
    )
  }
}

export default MessageList
