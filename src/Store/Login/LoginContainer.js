import { connect } from 'react-redux';

import Login from '../../Login/Login';
import authenticate from './LoginActions';

export const mapDispatchToProps = {
  onAuthenticateAction: authenticate,
};

export default connect(null, mapDispatchToProps)(Login);
