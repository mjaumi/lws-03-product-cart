import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// creating redux store here
const store = createStore(rootReducer, composeWithDevTools());

export default store;