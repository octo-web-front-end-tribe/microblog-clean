import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MessageList from './MessageList';
import Message from '../Message/Message';

const fakeMessage1 = { id: '123', content: 'fakeContent1', author: 'fakeAuthor1' };
const fakeMessage2 = { id: '456', content: 'fakeContent2', author: 'fakeAuthor2' };
const messages = [
  fakeMessage1,
  fakeMessage2,
];

describe('MessageList component', () => {
  describe('on first render', () => {
    describe('with defined props', () => {
      it('should render Message components with data from fetchMessages response', () => {
        const wrapper = shallow(<MessageList messages={messages} />);

        expect(wrapper.find(Message)).to.have.length(2);
        expect(wrapper.find(Message).at(0).prop('message')).to.deep.equal(fakeMessage2);
        expect(wrapper.find(Message).at(1).prop('message')).to.deep.equal(fakeMessage1);
      });
    });

    describe('without props', () => {
      it('should render nothing', () => {
        const wrapper = shallow(<MessageList />);

        expect(wrapper.find(Message)).to.have.length(0);
      });
    });
  });
});
