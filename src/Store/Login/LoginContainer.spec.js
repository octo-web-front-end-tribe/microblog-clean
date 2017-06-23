import { expect } from 'chai';

import { mapStateToProps, mapDispatchToProps } from './LoginContainer';
import {
  LOGIN,
  UPDATE_LOGIN,
  UPDATE_LOCAL_STORAGE,
} from './LoginActions';

describe('LoginContainer', () => {
  describe('mapStateToProps', () => {
    it('Should map correctly', () => {
      const state = {
        auth: {
          login: 'login',
        },
      };

      expect(mapStateToProps(state)).to.deep.equal({ login: 'login', isAuthenticated: false });
    });

    it('Should map correctly', () => {
      const auth = {
        login: 'login',
        isAuthenticated: true,
      };

      expect(mapStateToProps({ auth })).to.deep.equal(auth);
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should map onAuthenticateAction correctly', () => {
      expect(mapDispatchToProps).to.have.property('onAuthenticateAction').that.is.a('function');
      expect(mapDispatchToProps.onAuthenticateAction('login')).to.deep.equal({
        type: LOGIN,
        login: 'login',
      });
    });

    it('Should map onUpdateLoginAction correctly', () => {
      expect(mapDispatchToProps).to.have.property('onUpdateLoginAction').that.is.a('function');
      expect(mapDispatchToProps.onUpdateLoginAction('log')).to.deep.equal({
        type: UPDATE_LOGIN,
        newLogin: 'log',
      });
    });

    it('Should map updateLocalStorageAction correctly', () => {
      expect(mapDispatchToProps).to.have.property('updateLocalStorageAction').that.is.a('function');
      expect(mapDispatchToProps.updateLocalStorageAction('login')).to.deep.equal({
        type: UPDATE_LOCAL_STORAGE,
        login: 'login',
      });
    });
  });
});
