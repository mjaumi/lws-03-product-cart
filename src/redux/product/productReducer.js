import { ADD_PRODUCT, DECREASE_STOCK, INCREASE_STOCK } from './actionTypes';
import initialState from './initialState';

// this function is calculating next product id
const nextProductId = (products) => {
    return products.reduce((maxId, product) => Math.max(maxId, product.id), -1) + 1;
}

// this is the reducer function for product slice
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: nextProductId(state),
                    ...action.payload,
                }
            ];
        case DECREASE_STOCK:
            return state.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity--,
                    };
                } else {
                    return product;
                }
            });
        case INCREASE_STOCK:
            const { productId, quantity } = action.payload;
            return state.map(product => {
                if (product.id === productId) {
                    return {
                        ...product,
                        quantity: product.quantity + quantity,
                    };
                } else {
                    return product;
                }
            });
        default:
            return state;
    }
}

export default productReducer;