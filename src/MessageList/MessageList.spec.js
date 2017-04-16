import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import MessageList from './MessageList'
import Message from '../Message/Message'
import * as ApiHelper from '../ApiHelper/ApiHelper'

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

describe('MessageList component', () => {
  describe('on render', () => {
    beforeEach(() => {
      sinon.stub(ApiHelper, 'fetchMessages')
    })

    afterEach(() => {
      ApiHelper.fetchMessages.restore()
    })

    it('should call fetchMessages from ApiHelper', (done) => {
      ApiHelper.fetchMessages.returns(Promise.resolve(fakeMessages))

      const wrapper = shallow(<MessageList/>)


      setTimeout(() => {
        expect(wrapper.find(Message)).to.have.length(2)
        expect(wrapper.contains(<Message message={message1} />)).to.be.true
        expect(wrapper.contains(<Message message={message2} />)).to.be.true
        done()
      }, 10)
    })
  })
})
