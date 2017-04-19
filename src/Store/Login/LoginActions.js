export const LOGIN = 'LOGIN';
export const UPDATE_LOGIN = 'UPDATE_LOGIN';
export const UPDATE_LOCAL_STORAGE = 'UPDATE_LOCAL_STORAGE';

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

export function updateLocalStorage(login) {
  return {
    type: UPDATE_LOCAL_STORAGE,
    login,
  };
}
