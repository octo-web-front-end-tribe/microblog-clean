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
  describe('on render', () => {
    it('should render 1 message with right props', () => {
        const messages = [{
            id: "1",
            content: "message1Content",
            author: "author"
        }];

        const wrapper = shallow(<MessageList messages={messages}/>);
        expect(wrapper.find(Message)).to.have.length(1);
        expect(wrapper.find(Message).at(0).prop("message")).to.deep.equal({
            id: "1",
            content: "message1Content",
            author: "author"
        });
    })

    it('should render 2 messages', () => {
        const messages = [{
            id: "1",
            content: "message1Content",
            author: "author"
        }, {
            id: "2",
            content: "message2Content",
            author: "author"
        }];

        const wrapper = shallow(<MessageList messages={messages}/>);
        expect(wrapper.find(Message)).to.have.length(2);
    })
  })
})
