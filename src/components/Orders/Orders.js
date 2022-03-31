import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import OrderSummary from '../OrderSummary/OrderSummary';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <div className="container my-5">
                <div className="row  mt-3 orders-container">
                    <div className="col-lg-8 col-ms-6">
                        {
                            cart.map(product => <OrderSummary
                                key={product.id}
                                product={product}
                            ></OrderSummary>)
                        }
                    </div>
                    <div className="col-lg-4 col-md-6 cart-container2">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Orders;