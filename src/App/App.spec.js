import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import MessageList from '../MessageList/MessageList';

describe('App component', () => {
  it('should render hello message', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.greeting').text()).to.equal('Hello OCTO !');
  });

  it('Should render hello message with the right props', () => {
    const wrapper = shallow(<App name={'myName'} />);

    expect(wrapper.find('.greeting').text()).to.equal('Hello myName !');
  });

  it('Should render a MessageList component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(MessageList)).to.have.length(1);
  });
});
