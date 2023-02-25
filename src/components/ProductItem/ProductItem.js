import React from 'react';

const ProductItem = ({ product }) => {
    // destructuring the product object
    const { productName, category, imgUrl, price, quantity } = product;

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
                <button className='lws-btnAddToCart'>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;