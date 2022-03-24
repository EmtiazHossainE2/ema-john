import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart-container'>
            <h5 className='py-3'>Order Summary</h5>
            <div>
                <p>Selected Items :</p>
                <p>Total Price : $</p>
                <p>Shipping Charge: $</p>
                <p>Tax : $</p>
                <h5>Grand Total : $ </h5>
            </div>
            <button className='clear-cart my-2'>
                <p className='my-2'>Clear Cart</p>
            </button>
            <button className='review-order mb-3'>
                <p className='my-2'>Review Order</p>
            </button>
        </div>
    );
};

export default Cart;