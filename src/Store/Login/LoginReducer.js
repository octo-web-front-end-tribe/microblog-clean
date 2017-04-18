import { LOGIN } from './LoginActions';

export default function loginReducer(state = {}, action) {
  if (action && action.type === LOGIN) {
    return Object.assign({}, state, { login: action.login });
  }
  return state;
}
