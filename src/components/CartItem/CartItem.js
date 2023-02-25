import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { decreaseQuantity, deleteFromCart, increaseQuantity } from '../../redux/cart/actionCreators';
import { decreaseStock, increaseStock } from '../../redux/product/actionCreators';

const CartItem = ({ cartItem }) => {
    // destructuring the cart item
    const { id, productName, category, imgUrl, price, cartQuantity } = cartItem;

    // integration or react-redux hooks here
    const dispatch = useDispatch();

    // getting specific product's quantity here to prevent the stock of the product
    const product = useSelector(state => state.products.find(product => product.id === id));

    // handler function to handle delete from cart feature
    const deleteCartItemHandler = (productId, quantity) => {
        dispatch(deleteFromCart(productId, quantity));
        dispatch(increaseStock(productId, quantity));
    }

    // handler function to handle increasing cart item feature
    const increaseQuantityHandler = (productId, quantity) => {
        if (quantity > 0) {
            dispatch(increaseQuantity(productId));
            dispatch(decreaseStock(productId, 1));
        } else {
            toast.error('Sorry, No More Stock Available !!');
        }
    }

    // handler function to handle decreasing cart item feature
    const decreaseQuantityHandler = (productId, quantity) => {
        if (quantity > 1) {
            dispatch(decreaseQuantity(productId));
            dispatch(increaseStock(productId, 1));
        } else {
            deleteCartItemHandler(productId, quantity);
        }
    }

    // rendering the cart item cards component here
    return (
        <div className='cartCard'>
            <div className='flex items-center col-span-6 space-x-6'>

                <img className='lws-cartImage' src={imgUrl} alt='product' />

                <div className='space-y-2'>
                    <h4 className='lws-cartName'>{productName}</h4>
                    <p className='lws-cartCategory'>{category}</p>
                    <p>BDT <span className='lws-cartPrice'>{price}</span></p>
                </div>
            </div>
            <div className='flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0'>

                <div className='flex items-center space-x-4'>
                    <button onClick={() => increaseQuantityHandler(id, product.quantity)} className='lws-incrementQuantity'>
                        <i className='text-lg fa-solid fa-plus'></i>
                    </button>
                    <span className='lws-cartQuantity'>{cartQuantity}</span>
                    <button onClick={() => decreaseQuantityHandler(id, cartQuantity)} className='lws-decrementQuantity'>
                        <i className='text-lg fa-solid fa-minus'></i>
                    </button>
                </div>

                <p className='text-lg font-bold'>BDT <span className='lws-calculatedPrice'>{cartQuantity * price}</span></p>
            </div>

            <div className='flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0'>
                <button
                    onClick={() => deleteCartItemHandler(id, cartQuantity)}
                    className='lws-removeFromCart'>
                    <i className='text-lg text-red-400 fa-solid fa-trash'></i>
                </button>
            </div>
        </div>
    );
};

export default CartItem;