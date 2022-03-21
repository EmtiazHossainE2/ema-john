import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name.slice(0, 20)}</p>
                <p className='product-price'>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} start</small></p>
            </div>
            <button className='cart-btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;