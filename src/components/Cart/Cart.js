import React from 'react';
import BillingDetailsCard from '../BillingDetailsCard/BillingDetailsCard';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    return (
        <div class="container 2xl:px-8 px-2 mx-auto">
            <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div class="cartListContainer">
                <div class="space-y-6">
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