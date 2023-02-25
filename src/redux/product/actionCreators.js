// action creators for product slice is declared here

import { ADD_PRODUCT, DECREASE_STOCK, INCREASE_STOCK } from './actionTypes';

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

export const increaseStock = (productId, quantity) => {
    return {
        type: INCREASE_STOCK,
        payload: {
            productId,
            quantity
        },
    }
}

export const decreaseStock = (productId, quantity) => {
    return {
        type: DECREASE_STOCK,
        payload: {
            productId,
            quantity
        },
    }
}