export function fetchMessages() {
  return fetch('https://skool-microblog.herokuapp.com/messages')
    .then(response => response.json())
}