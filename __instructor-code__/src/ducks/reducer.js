const initialState = {
  loggedInAs: '',
  isCreditCardHolder: false,
};

const LOGGED_IN = 'LOGGED_IN'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      const stateCopy = Object.assign({}, state);
      stateCopy.loggedInAs = action.payload;
      return stateCopy;
    default:
      return state;
  }
}

export function login(name) {
  return {
    type: LOGGED_IN,
    payload: name
  };
}
