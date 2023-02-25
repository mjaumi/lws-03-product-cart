import React from 'react';
import { useSelector } from 'react-redux';
import BillingDetailsCard from '../BillingDetailsCard/BillingDetailsCard';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    // integration of react-redux hooks here
    const cartItems = useSelector(state => state.cart.cartItems);

    // this reducer function is calculating total bill
    const totalBill = cartItems.reduce((total, cartItem) => total += (cartItem.price * cartItem.cartQuantity), 0);

    // rendering the cart component here
    return (
        <div className='container 2xl:px-8 px-2 mx-auto'>
            <h2 className='mb-8 text-xl font-bold'>Shopping Cart</h2>
            <div className='cartListContainer'>
                <div className='space-y-6'>
                    {
                        cartItems.length ?
                            cartItems.map(cartItem => <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                            />)
                            :
                            <div className='h-full w-full flex items-center justify-center'>
                                <h3 className='text-xl'>No product to show in your cart.</h3>
                            </div>
                    }
                </div>

                <div>
                    <BillingDetailsCard totalBill={totalBill} />
                </div>
            </div>
        </div>
    );
};

export default Cart;