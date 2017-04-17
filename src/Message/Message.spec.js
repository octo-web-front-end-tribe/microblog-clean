import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Message component', () => {
  const fakeMessage = {
    id: 'abcd',
    content: 'ceci est un message',
    author: 'ceci est un auteur',
  };

  it('Should render author message', () => {
    const wrapper = shallow(<Message message={fakeMessage} />);

    expect(wrapper.find('.author').text()).to.equal(fakeMessage.author);
  });

  it('Should render content message', () => {
    const wrapper = shallow(<Message message={fakeMessage} />);

    expect(wrapper.find('.content').text()).to.equal(fakeMessage.content);
  });
});
