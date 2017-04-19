import { connect } from 'react-redux';

import Login from '../../Login/Login';
import { authenticate, updateLogin } from './LoginActions';

export const mapDispatchToProps = {
  onAuthenticateAction: authenticate,
  onUpdateLoginAction: updateLogin,
};

export function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
