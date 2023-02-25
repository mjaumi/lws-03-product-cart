import React from 'react';
import BillingDetailsCard from '../BillingDetailsCard/BillingDetailsCard';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    return (
        <div className='container 2xl:px-8 px-2 mx-auto'>
            <h2 className='mb-8 text-xl font-bold'>Shopping Cart</h2>
            <div className='cartListContainer'>
                <div className='space-y-6'>
                    <CartItem />
                </div>

                <div>
                    <BillingDetailsCard />
                </div>
            </div>
        </div>
    );
};

export default Cart;