import { createStore } from 'redux';
import rootReducer from './rootReducer';

// creating redux store here
const store = createStore(rootReducer);

export default store;