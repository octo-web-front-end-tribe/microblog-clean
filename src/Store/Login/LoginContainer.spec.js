import { expect } from 'chai';

import { mapDispatchToProps } from './LoginContainer';

describe('LoginContainer', () => {
  it('Should map dispatcher correctly', () => {
    expect(mapDispatchToProps).to.have.property('onAuthenticateAction').that.is.a('function');
    expect(mapDispatchToProps.onAuthenticateAction('login')).to.deep.equal({
      type: 'LOGIN',
      login: 'login',
    });
  });
});
