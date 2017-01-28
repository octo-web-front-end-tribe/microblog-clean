import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import MessageList from './MessageList'
import Message from '../Message/Message'
import * as ApiHelper from '../ApiHelper/ApiHelper'

const fakeMessage1 = { id: '123', content: 'fakeContent1', author: 'fakeAuthor1' }
const fakeMessage2 = { id: '456', content: 'fakeContent2', author: 'fakeAuthor2' }
const messages = [
  fakeMessage1,
  fakeMessage2
]

describe('MessageList component', () => {
  describe('on first render', () => {
    beforeEach(() => (
        sinon.stub(ApiHelper, "fetchMessages")
    ))

    afterEach(() => {
        ApiHelper.fetchMessages.restore();
    })

    it('should render Message components with data from fetchMessages response', (done) => {
      ApiHelper.fetchMessages.returns(Promise.resolve(messages))
      const wrapper = shallow(<MessageList />)

      setTimeout(function() {
        expect(ApiHelper.fetchMessages.calledOnce).to.be.true

        expect(wrapper.find(Message)).to.have.length(2)
        expect(wrapper.contains(<Message message={fakeMessage1} />)).to.be.true
        expect(wrapper.contains(<Message message={fakeMessage2} />)).to.be.true
        done()
      }, 10)
    })
  })
})
