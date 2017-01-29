import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import MessageList from '../MessageList/MessageList';
import InputMessage from '../InputMessage/InputMessage';

describe('App component', () => {
  it('Should render a MessageList component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(MessageList)).to.have.length(1);
  });

  it('Should render an InputMessage', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(<InputMessage />)).to.have.length(1);
  });
});
