import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

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
    const remove = () => {
        let newCart = []
        setCart(newCart)
    }
    const deleteAll = (product) => {
        deleteShoppingCart(product.id)
    }


    return (
        <div>
            <div className="row shop-container">
                <div className="col-lg-10 col-md-9">
                    <div className="row container mt-5 ">
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 cart-container">
                    <Cart cart={cart} >
                        <button className='clear-cart my-2' onClick={deleteAll} >
                            <p className='my-2' onClick={remove}>Clear Cart <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></p>
                        </button>
                        <Link to='/orders'>
                            <button className='review-order mb-3'>
                                <p className='my-2'>Review Order <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon></p>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;