import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props
    const { img, name, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name.slice(0, 20)}</p>
                <p className='product-price'>Price : ${price}</p>
                <p className='sell'><small>Manufacturer : {seller}</small></p>
                <p className='rating'><small>Rating : {ratings} start</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <p>Add To Cart   <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon> </p>
            </button>
        </div>
    );
};

export default Product;