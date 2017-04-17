import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import MessageList from './MessageList'
import Message from '../Message/Message'

describe('MessageList component', () => {
  const message1 = {
    id : 'abcd',
    author : 'abcd',
    content : 'abcd',
  }

  const message2 = {
    id : 'efgh',
    author : 'efgh',
    content : 'efgh',
  }

  const fakeMessages = [message1, message2]

  describe('on render', () => {
    it('Should render as many Message compoent as there are in props', () => {
      const wrapper = shallow(<MessageList messages={fakeMessages}/>);

      expect(wrapper.find(Message)).to.have.length(2);
    });
  });
});
