import { createStore } from 'redux';

const initialState = {
    loggedInAs: 'Hello',
    isCreditCardHolder: false
}

const reducer = state => state;

const store = createStore( reducer, initialState )

export default store; 

