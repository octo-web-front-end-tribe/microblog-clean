import { LOGIN, UPDATE_LOGIN, UPDATE_LOCAL_STORAGE } from './LoginActions';

export default function loginReducer(state = {}, action) {
  if (action) {
    if (action.type === LOGIN) {
      return Object.assign({}, state, {
        login: action.login,
        isAuthenticated: true,
      });
    }
    if (action.type === UPDATE_LOGIN) {
      return Object.assign({}, state, { login: action.newLogin });
    }
    if (action.type === UPDATE_LOCAL_STORAGE) {
      window.localStorage.setItem('name', action.login);
    }
  }
  return state;
}
