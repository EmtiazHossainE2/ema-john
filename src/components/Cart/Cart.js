import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // console.log(cart);
    let total = 0
    let shipping = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = parseFloat(total * 10 / 100)
    const grandTotal = total + shipping + tax
    return (
        <div className='cart-container'>
            <h5 className='py-3'>Order Summary</h5>
            <div>
                <p>Selected Items : {quantity}</p>
                <p>Total Price : ${total}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax : ${tax}</p>
                <h5>Grand Total : ${grandTotal} </h5>
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