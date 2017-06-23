import { connect } from 'react-redux';

import Login from '../../Login/Login';
import {
  authenticate,
  updateLogin,
  updateLocalStorage,
} from './LoginActions';

export const mapDispatchToProps = {
  onAuthenticateAction: authenticate,
  onUpdateLoginAction: updateLogin,
  updateLocalStorageAction: updateLocalStorage,
};

export function mapStateToProps({ auth }) {
  return {
    login: auth.login,
    isAuthenticated: !!auth.isAuthenticated,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
