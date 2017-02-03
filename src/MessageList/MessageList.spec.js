import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import MessageList from './MessageList'
import Message from '../Message/Message'

describe('MessageList component', () => {
  describe('on render', () => {
    it('should render a list of messages', () => {
      const wrapper = shallow(<MessageList/>)

      expect(wrapper.find(Message)).to.have.length(2)
    })
  })
})