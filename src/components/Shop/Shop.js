import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //cart handler
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="order-container">
                    <h3>Order Summary</h3>
                    <p>Selected Items : {cart.length}</p>
                    <p>Total Price : $ </p>
                    <p>Total Shipping Charge: $</p>
                    <p>Tax : $ </p>
                    <h2>Grand Total: $ </h2>
                    <button className='clear-cart'>
                        <p>Clear Cart</p>
                    </button>
                    <button className='review-order'>
                        <p>Review Order</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;