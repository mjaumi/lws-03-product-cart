import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/actionCreators';
import { decreaseStock } from '../../redux/product/actionCreators';

const ProductItem = ({ product }) => {
    // destructuring the product object
    const { productName, category, imgUrl, price, quantity } = product;

    // integration of react-redux hooks here
    const dispatch = useDispatch();

    // handler function to handle add to cart feature
    const addToCartHandler = (product) => {
        const { quantity: _, ...cartProduct } = product;
        dispatch(addToCart(cartProduct));
        dispatch(decreaseStock(product.id, 1));
    }

    // rendering the product item cards component here
    return (
        <div className='lws-productCard'>
            <img className='lws-productImage' src={imgUrl} alt='product' />
            <div className='p-4 space-y-2'>
                <h4 className='lws-productName'>{productName}</h4>
                <p className='lws-productCategory'>{category}</p>
                <div className='flex items-center justify-between pb-2'>
                    <p className='productPrice'>BDT <span className='lws-price'>{price}</span></p>
                    <p className='productQuantity'>QTY <span className='lws-quantity'>{quantity}</span></p>
                </div>
                <button onClick={() => addToCartHandler(product)} className='lws-btnAddToCart' disabled={quantity === 0}>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;