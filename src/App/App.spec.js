import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('App component', () => {
  it('should render a div with right className', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.greeting').text()).to.equal('Hello');
  });
});
