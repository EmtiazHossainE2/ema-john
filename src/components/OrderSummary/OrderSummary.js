import React from 'react';
import './OrderSummary.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderSummary = (props) => {
    const { handleRemoveProduct, product } = props
    const { img, name, price, quantity, shipping } = product
    return (
        <div>
            <div className="row container order-container mb-4 mt-3">
                <div className="col-lg-10 col-sm-10 product-container ">
                    <div><img className='order-img me-5' src={img} alt="" /></div>
                    <div>
                        <h5 className='mt-3' title={name}>{name?.length > 15 ? name.slice(0, 15) + '...' : name}</h5>
                        <p className='p-0 m-0'><small>Quantity : {quantity}</small></p>
                        <p className='p-0 m-0'>Price : <span className='text-warning fs-5 fw-bold'>${price}</span></p>
                        <p>Shipping Charge: ${shipping}</p>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-2 " >
                    <FontAwesomeIcon onClick={() => handleRemoveProduct(product)} className='deleteIcon' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;