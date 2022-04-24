import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderSummary from '../OrderSummary/OrderSummary';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Orders.css'
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }
    return (
        <div>
            <div className="container my-5">
                <div className="row  mt-3 orders-container">
                    <div className="col-lg-8 col-ms-6">
                        {
                            cart.map(product => <OrderSummary
                                key={product._id}
                                product={product}
                                handleRemoveProduct={handleRemoveProduct}
                            ></OrderSummary>)
                        }
                    </div>
                    <div className="col-lg-4 col-md-6 cart-container2">
                        <Cart cart={cart} >
                            <Link to='/inventory'>
                                <button className='review-order my-3'>
                                    <p className='my-2'>Proceed Checkout <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></p>
                                </button></Link>
                        </Cart>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Orders;