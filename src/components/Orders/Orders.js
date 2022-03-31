import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <h1>Order Page</h1>
            <h2>Total product {products.length}</h2>
            <h2>total order : {cart.length}</h2>
        </div>
    );
};

export default Orders;