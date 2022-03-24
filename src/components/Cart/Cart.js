import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <p className='my-2'>Clear Cart <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></p>
            </button>
            <button className='review-order mb-3'>
                <p className='my-2'>Review Order <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Cart;