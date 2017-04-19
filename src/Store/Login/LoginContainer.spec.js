import { expect } from 'chai';

import { mapStateToProps, mapDispatchToProps } from './LoginContainer';

describe('LoginContainer', () => {
  describe('mapStateToProps', () => {
    it('Should map correctly', () => {
      const state = { login: 'login' };
      expect(mapStateToProps(state)).to.deep.equal({ login: 'login', isAuthenticated: false });
    });
    it('Should map correctly', () => {
      const state = { login: 'login', isAuthenticated: true };
      expect(mapStateToProps(state)).to.deep.equal(state);
    });
  });
  describe('mapDispatchToProps', () => {
    it('Should map correctly', () => {
      expect(mapDispatchToProps).to.have.property('onAuthenticateAction').that.is.a('function');
      expect(mapDispatchToProps.onAuthenticateAction('login')).to.deep.equal({
        type: 'LOGIN',
        login: 'login',
      });
    });

    it('Should map correctly', () => {
      expect(mapDispatchToProps).to.have.property('onUpdateLoginAction').that.is.a('function');
      expect(mapDispatchToProps.onUpdateLoginAction('log')).to.deep.equal({
        type: 'UPDATE_LOGIN',
        newLogin: 'log',
      });
    });
  });
});
