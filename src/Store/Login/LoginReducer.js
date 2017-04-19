import { LOGIN, UPDATE_LOGIN } from './LoginActions';

export default function loginReducer(state = {}, action) {
  if (action) {
    if (action.type === LOGIN) {
      return Object.assign({}, state, { login: action.login });
    }
    if (action.type === UPDATE_LOGIN) {
      return Object.assign({}, state, { login: action.newLogin });
    }
  }
  return state;
}
