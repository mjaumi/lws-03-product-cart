import React from 'react';
import { useSelector } from 'react-redux';
import BillingDetailsCard from '../BillingDetailsCard/BillingDetailsCard';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    // integration of react-redux hooks here
    const cartItems = useSelector(state => state.cart.cartItems);

    // rendering the cart component here
    return (
        <div className='container 2xl:px-8 px-2 mx-auto'>
            <h2 className='mb-8 text-xl font-bold'>Shopping Cart</h2>
            <div className='cartListContainer'>
                <div className='space-y-6'>
                    {
                        cartItems?.map(cartItem => <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        />)
                    }
                </div>

                <div>
                    <BillingDetailsCard />
                </div>
            </div>
        </div>
    );
};

export default Cart;