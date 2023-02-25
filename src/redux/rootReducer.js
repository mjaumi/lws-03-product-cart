import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import productReducer from './product/productReducer';

// combining all the reducers of the application here
const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});

export default rootReducer;