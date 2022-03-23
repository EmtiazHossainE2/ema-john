import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    //ager data load kore dekhabo (side effect ) 
    useEffect(() => {
        const storedCart = getStoredCart()
        const savedProduct = []
        //obj pacci tai for in loop use korci 
        for (const id in storedCart) {
            const exitProduct = products.find(product => product.id === id)
            // console.log(exitProduct);
            if (exitProduct) {
                const quantity = storedCart[id]
                exitProduct.quantity = quantity
                savedProduct.push(exitProduct)
            }
        }
        setCart(savedProduct)
    }, [products])

    //cart handler
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;