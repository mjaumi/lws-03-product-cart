// action creators for cart slice is declared here

import { ADD_TO_CART, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY } from './actionTypes'

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const deleteFromCart = (productId, cartQuantity) => {
    return {
        type: DELETE_FROM_CART,
        payload: {
            productId,
            cartQuantity
        }
    }
}

export const increaseQuantity = (productId) => {
    return {
        type: INCREASE_QUANTITY,
        payload: productId
    }
}

export const decreaseQuantity = (productId) => {
    return {
        type: DECREASE_QUANTITY,
        payload: productId
    }
}