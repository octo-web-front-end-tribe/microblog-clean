export const LOGIN = 'LOGIN';

export default function authenticate(login) {
  return {
    type: LOGIN,
    login,
  };
}
