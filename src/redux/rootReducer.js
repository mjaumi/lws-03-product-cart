import { combineReducers } from 'redux';
import productReducer from './product/productReducer';

// combining all the reducers of the application here
const rootReducer = combineReducers({
    products: productReducer,
});

export default rootReducer;