import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price : ${price}</h4>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} start</p>
        </div>
    );
};

export default Product;