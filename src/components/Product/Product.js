import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product
    return (
        <div className='col-lg-4 col-md-6 rounded-1'>
            <div className="cart  mx-2 my-3 border border-1 ">
                <div className='text-center'>
                    <img className='product-img p-2 ' src={img} alt="" />
                </div>
                <div className='ps-3'>
                    <h5 className='mt-2'>{name.slice(0, 15)}</h5>
                    <h6 className='mb-4'>Price : $ {price}</h6>
                    <p className='mb-0'><small>Manufacturer : {seller}</small></p>
                    <p><small>Ratings : {ratings}</small></p>
                </div>
                <button className='cart-btn'>
                    <p className='my-2'>Add To Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;