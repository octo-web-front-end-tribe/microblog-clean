import { expect } from 'chai';
import { authenticate, updateLogin } from './LoginActions';

import loginReducer from './LoginReducer';

describe('LoginReducer', () => {
  describe('When no parameters are given', () => {
    it('Should return the initial state', () => {
      const state = loginReducer();
      expect(state).to.deep.equal({});
    });
  });

  describe('When no actions are given', () => {
    it('Should return the current state', () => {
      const currentState = { test: 'value' };
      const state = loginReducer(currentState);
      expect(state).to.deep.equal(currentState);
    });
  });

  describe('When an unhandled action is given', () => {
    it('Should return the current state', () => {
      const currentState = { test: 'value' };
      const unknownAction = { type: 'UNKNOWN' };
      const state = loginReducer(currentState, unknownAction);
      expect(state).to.deep.equal(currentState);
    });
  });

  describe('When an authenticate action is given', () => {
    it('Should return a new updated state', () => {
      const currentState = { test: 'value' };
      const loginAction = authenticate('testLogin');
      const state = loginReducer(currentState, loginAction);
      expect(state).to.have.property('login').that.equals('testLogin');
      expect(state).to.have.property('isAuthenticated').that.equals(true);
    });
  });

  describe('When an updateLogin action is given', () => {
    it('Should return a new updated state', () => {
      const currentState = { test: 'value' };
      const loginAction = updateLogin('testLogin');
      const state = loginReducer(currentState, loginAction);
      expect(state).to.have.property('login').that.equals('testLogin');
    });
  });
});
