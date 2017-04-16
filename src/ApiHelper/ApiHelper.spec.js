import chai from 'chai'
import {expect} from 'chai'
import fetchMock from 'fetch-mock'
import chaiFetchMock from 'chai-fetch-mock'
chai.use(chaiFetchMock)
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
  const getMessageRoute = 'https://skool-microblog.herokuapp.com/messages'

  describe('fetchMessages', () => {
    beforeEach(() => {
      fetchMock.get(getMessageRoute, fakeMessages)
    })

    afterEach(() => {
      fetchMock.restore()
    })

    it('should call the API', () => {
      return fetchMessages()
        .then(response => {
          expect(fetchMock).route(getMessageRoute).to.have.been.calledOnce
          expect(response).to.deep.equal(fakeMessages)
        })
    })
  })
})
