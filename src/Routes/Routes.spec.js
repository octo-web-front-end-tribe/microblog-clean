import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import Routes from './Routes';

describe('Routes', () => {
  it('should render correct routes', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Route).at(0).prop('path')).to.equal('/');
    expect(wrapper.find(Route).at(1).prop('path')).to.equal('/about');
    expect(wrapper.find(Route).at(2).prop('path')).to.equal('/login');
  });
});
