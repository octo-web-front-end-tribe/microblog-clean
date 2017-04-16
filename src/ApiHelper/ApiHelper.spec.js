import chai from 'chai';
import fetchMock from 'fetch-mock';
import chaiFetchMock from 'chai-fetch-mock';
import {fetchMessages} from './ApiHelper';

const { expect } = chai;
chai.use(chaiFetchMock);

const messages = [
  {id : 'abcd', content : 'fakeContent', author : 'fakeAuthor'}
]

describe('ApiHelper component', () => {
  const getMessageRoute = 'https://skool-microblog.herokuapp.com/messages'

  describe('when the query is successful', () => {
    beforeEach(() => (
      fetchMock.get(getMessageRoute, messages)
    ))

    afterEach(fetchMock.restore)

    it('should return a response with the expected messages', () => {
      return fetchMessages()
        .then((response) => {
          /* eslint no-unused-expressions:0 */
          expect(fetchMock).route(getMessageRoute).to.have.been.calledOnce
          expect(response).to.deep.equal(messages);
        })
    })
  })
})
