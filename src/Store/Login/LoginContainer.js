import { connect } from 'react-redux';

import Login from '../../Login/Login';
import { authenticate, updateLogin } from './LoginActions';

export const mapDispatchToProps = {
  onAuthenticateAction: authenticate,
  onUpdateLoginAction : updateLogin,
};

export default connect(null, mapDispatchToProps)(Login);
