const initialState = {
    loggedInAs: '',
    isCreditCardHolder: false,
  };
  
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

  const LOGGED_IN = 'LOGGED_IN'

  export function buildLogin(name){
    return{
    type: LOGGED_IN,
    payload: name,
    }
  }