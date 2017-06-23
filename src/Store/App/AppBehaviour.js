import { fetchMessages, postMessage } from '../../ApiHelper/ApiHelper';

const LOAD_MESSAGES_REQUEST = 'LOAD_MESSAGES_REQUEST';
const LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';
const SAVE_MESSAGES_DONE = 'SAVE_MESSAGES_DONE';

export function loadMessagesRequest() {
  return {
    type: LOAD_MESSAGES_REQUEST,
  };
}

export function saveMessageSuccess() {
  return {
    type: SAVE_MESSAGES_DONE,
  };
}

export function loadMessageSuccess(data) {
  return {
    type: LOAD_MESSAGES_SUCCESS,
    messages: data,
  };
}

export function loadMessages() {
  return (dispatch) => {
    dispatch(loadMessagesRequest());
    fetchMessages().then((data) => {
      dispatch(loadMessageSuccess(data));
    });
  };
}

export function saveMessage(author, message) {
  return (dispatch) => {
    postMessage({
      author,
      content: message,
    })
    .then(() => {
      dispatch(loadMessages());
    });
  };
}

const initialState = {
  messages: [],
};

export default function messageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_MESSAGES_REQUEST :
      return Object.assign({}, state, { isLoading: true });
    case LOAD_MESSAGES_SUCCESS :
      return Object.assign({}, state, {
        isLoading: false,
        messages: action.messages,
      });
    default :
      return state;
  }
}
