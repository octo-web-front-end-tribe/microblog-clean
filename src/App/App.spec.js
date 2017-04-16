import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import App from './App'
import MessageList from '../MessageList/MessageList'
import InputMessage from '../InputMessage/InputMessage'
import * as ApiHelper from '../ApiHelper/ApiHelper'

const fakeMessage1 = {id : '123', content : 'fakeContent1', author : 'fakeAuthor1'}
const fakeMessage2 = {id : '456', content : 'fakeContent2', author : 'fakeAuthor2'}
const fakeMessages = [
  fakeMessage1,
  fakeMessage2
]

describe('App component', () => {
  beforeEach(() => (
    sinon.stub(ApiHelper, "fetchMessages")
  ))

  afterEach(() => {
    ApiHelper.fetchMessages.restore();
  })

  it('should contain MessageList component with messages', () => {
    ApiHelper.fetchMessages.returns(Promise.resolve(fakeMessages))
    const wrapper = shallow(<App />)

    wrapper.setState({messages : fakeMessages})

    const messageList = wrapper.find(MessageList);

    expect(messageList.prop("messages")).to.deep.equal(fakeMessages)
  })

  it('should render InputMessage', () => {
    ApiHelper.fetchMessages.returns(Promise.resolve(fakeMessages))
    const wrapper = shallow(<App />)

    expect(wrapper.find(InputMessage)).to.have.length(1)
  })

  describe('on component will mount', () => {
    it('should set state messages with data from fetchMessages response', (done) => {
      ApiHelper.fetchMessages.returns(Promise.resolve(fakeMessages))
      const wrapper = shallow(<App />)

      setTimeout(function () {
        expect(ApiHelper.fetchMessages).to.have.been.calledOnce
        expect(wrapper.state().messages).to.equal(fakeMessages)
        done()
      }, 10)
    })
  })

  describe('on refresh', () => {
    it('should set state messages with data from fetchMessages response', () => {
      ApiHelper.fetchMessages.returns(Promise.resolve(fakeMessages))
      const wrapper = shallow(<App />)

      return wrapper.instance().refresh()
        .then(() => {
          expect(ApiHelper.fetchMessages).to.have.been.calledTwice
          expect(wrapper.state().messages).to.equal(fakeMessages)
        })
    })
  })
})
