import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import OrderItems from '../OrderItems/OrderItems';
import OrderSummary from '../OrderSummary/OrderSummary';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <h1 className='text-center my-3'>Order Page</h1>
            <div className="container">
                <div className="row  mt-5">
                    <div className="col-lg-6 text-center">
                        <OrderSummary></OrderSummary>
                    </div>
                    <div className="col-lg-6">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Orders;