import React from 'react';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props

    let total = 0
    let shipping = 0
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }

    let tax = (total * 10 / 100).toFixed(2)
    const grandTotal = total + shipping + parseFloat(tax)

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : ${total} </p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax : ${tax} </p>
            <h3>Grand Total: ${grandTotal} </h3>
            <button className='clear-cart'>
                <p>Clear Cart <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></p>
            </button>
            <button className='review-order'>
                <p>Review Order <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Cart;