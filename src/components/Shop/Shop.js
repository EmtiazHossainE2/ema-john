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

    //load stored Cart data 
    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            // console.log(id); // obj theke id ta bar kore niye asci for in loop diye 
            const exitsProducts = products.find(product => product.id === id);
            if (exitsProducts) {
                const quantity = storedCart[id]
                exitsProducts.quantity = quantity
                console.log(exitsProducts);
                savedCart.push(exitsProducts)
            }
        }
        setCart(savedCart)
    }, [products])

    //handle cart 
    const handleAddToCart = selectedProduct => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            //lal jama porake khuje niye aste bolce oke bar kori baki gulan ace rest er vitor 
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }


    return (
        <div>
            <div className="row shop-container">
                <div className="col-lg-10 col-md-9">
                    <div className="row container mt-5 ">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;