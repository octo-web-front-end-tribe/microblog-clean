import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import MessageList from './MessageList'
import Message from '../Message/Message'
import * as ApiHelper from '../ApiHelper/ApiHelper'

let stubApiHelper

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

const fakeMessages = [message1, message2]

describe('MessageList component', () => {
  describe('on render', () => {
    beforeEach(() => {
      stubApiHelper = sinon.stub(ApiHelper, 'fetchMessages')
    })

    afterEach(() => {
      stubApiHelper.restore()
    })

    it('should call fetchMessages from ApiHelper', (done) => {
      stubApiHelper.returns(Promise.resolve(fakeMessages))

      const wrapper = shallow(<MessageList/>)


      setTimeout(() => {
        expect(wrapper.find(Message)).to.have.length(2)
        done()
      }, 10)
    })
  })
})