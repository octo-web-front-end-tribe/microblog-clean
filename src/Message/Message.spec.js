import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Message from './Message'

const fakeMessage = {
  id : 'abcd',
  content: 'ceci est un message',
  author: 'ceci est un auteur'
}

describe('Message component', () => {
  describe('on render', () => {
    it('should contain author and content', () => {
      const wrapper = shallow(<Message message={ fakeMessage }/>)

      expect(wrapper.text()).to.contain(fakeMessage.content)
      expect(wrapper.text()).to.contain(fakeMessage.author)
    })
  })
})