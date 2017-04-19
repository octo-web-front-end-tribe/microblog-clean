export const LOGIN = 'LOGIN';
export const UPDATE_LOGIN = 'UPDATE_LOGIN';

export function authenticate(login) {
  return {
    type: LOGIN,
    login,
  };
}

export function updateLogin(newLogin) {
  return {
    type: UPDATE_LOGIN,
    newLogin,
  };
}
