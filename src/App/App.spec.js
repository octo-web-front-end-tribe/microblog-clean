import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import MessageList from '../MessageList/MessageList';
import InputMessage from '../InputMessage/InputMessage';
import * as ApiHelper from '../ApiHelper/ApiHelper';

describe('App component', () => {
  beforeEach(() => (
    sinon.stub(ApiHelper, 'fetchMessages')
  ));

  afterEach(() => {
    ApiHelper.fetchMessages.restore();
  });

  describe('on render', () => {
    beforeEach(() => {
      ApiHelper.fetchMessages.returns(Promise.resolve([]));
    });

    it('should render MessageList', () => {
      const wrapper = shallow(<App />);

      const messageComponent = wrapper.find(MessageList);
      expect(messageComponent).to.have.length(1);
      expect(messageComponent.at(0).prop('messages')).to.be.instanceof(Array);
    });

    it('should render InputMessage', () => {
      const wrapper = shallow(<App />);

      const InputMessageComponent = wrapper.find(InputMessage);
      expect(InputMessageComponent).to.have.length(1);
      expect(InputMessageComponent.at(0).prop('onSubmit')).to.be.instanceof(Function);
    });
  });

  describe('on component will mount', () => {
    it('should set state messages with data from fetchMessages response', () => {
      const loadMessageSpy = sinon.spy();
      shallow(<App loadMessages={loadMessageSpy} />);

      expect(loadMessageSpy).to.have.been.calledOnce;
    });
  });

  describe('on refresh', () => {
    it('should set state messages with data from fetchMessages response', () => {
      const loadMessageSpy = sinon.spy();
      const wrapper = shallow(<App loadMessages={loadMessageSpy} />);

      wrapper.instance().refresh();
      expect(loadMessageSpy).to.have.been.calledTwice;
    });
  });
});
