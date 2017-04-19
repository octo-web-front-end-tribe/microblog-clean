import { expect } from 'chai';

import { mapDispatchToProps } from './LoginContainer';

describe('LoginContainer', () => {
  it('Should map a dispatcher on onAuthenticateAction correctly', () => {
    expect(mapDispatchToProps).to.have.property('onAuthenticateAction').that.is.a('function');
    expect(mapDispatchToProps.onAuthenticateAction('login')).to.deep.equal({
      type: 'LOGIN',
      login: 'login',
    });
  });

  it('Should map a dispatcher on onUpdateLoginAction correctly', () => {
    expect(mapDispatchToProps).to.have.property('onUpdateLoginAction').that.is.a('function');
    expect(mapDispatchToProps.onUpdateLoginAction('log')).to.deep.equal({
      type: 'UPDATE_LOGIN',
      newLogin: 'log',
    });
  });
});
