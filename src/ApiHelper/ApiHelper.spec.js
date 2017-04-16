import {expect} from 'chai'
import fetchMock from 'fetch-mock'
import {fetchMessages} from './ApiHelper'

const message1 = {
  id : 'abcd',
  author : 'abcd',
  content : 'abcd',
}

const message2 = {
  id : 'efgh',
  author : 'efgh',
  content : 'efgh',
}

const fakeMessages = [message1, message2]

describe('ApiHelper', () => {
  describe('fetchMessages', () => {
    beforeEach(() => {
      fetchMock.get('https://skool-microblog.herokuapp.com/messages', fakeMessages)
    })

    afterEach(() => {
      fetchMock.restore()
    })

    it('should call the API', () => {
      return fetchMessages()
        .then(response => {
          expect(fetchMock.calls().matched).to.have.length(1)
          expect(response).to.deep.equal(fakeMessages)
        })
    })
  })
})
