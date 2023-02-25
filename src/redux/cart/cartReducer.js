import { ADD_TO_CART, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY } from './actionTypes';
import initialState from './initialState';

// this is the reducer function for cart slice
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productExistsInCart = state.cartItems.filter(item => item.id === action?.payload?.id);
            let newCartItems = [];

            if (productExistsInCart.length) {
                newCartItems = state.cartItems.map(item => {
                    if (productExistsInCart[0].id === item.id) {
                        return {
                            ...item,
                            cartQuantity: item.cartQuantity + 1,
                        }
                    } else {
                        return item;
                    }
                });
            } else {
                newCartItems = [...state.cartItems, {
                    ...action.payload,
                    cartQuantity: 1,
                }];
            }

            return {
                totalCartItems: state.totalCartItems + 1,
                cartItems: newCartItems,
            };
        case DELETE_FROM_CART:
            const { productId, cartQuantity } = action.payload;
            return {
                totalCartItems: state.totalCartItems - cartQuantity,
                cartItems: state.cartItems.filter(item => item.id !== productId),
            };
        case INCREASE_QUANTITY:
            return {
                totalCartItems: state.totalCartItems + 1,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            cartQuantity: item.cartQuantity + 1,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        case DECREASE_QUANTITY:
            return {
                totalCartItems: state.totalCartItems - 1,
                cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            cartQuantity: item.cartQuantity - 1,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        default:
            return state;
    }
}

export default cartReducer;