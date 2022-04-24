import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [pageProduct,setPageProduct] =  useState(10)
    
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&pageProduct=${pageProduct}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page,pageProduct])


    useEffect(() => {
        fetch('http://localhost:5000/productCollection')
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])


    //handle cart 
    const handleAddToCart = selectedProduct => {
        let newCart = []
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            //lal jama porake khuje niye aste bolce oke bar kori baki gulan ace rest er vitor 
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct._id)
    }
    const remove = () => {
        let newCart = []
        setCart(newCart)
    }
    const deleteAll = (product) => {
        deleteShoppingCart(product._id)
    }


    return (
        <div>
            <div className="row shop-container">
                <div className="col-lg-10 col-md-9 mb-5">
                    <div className="row container mt-5 ">
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                    {/* 13 */}
                    <div className='container pagination-container'>
                        {
                            [...Array(pageCount).keys()]
                                .map(number =>
                                    <button className={page === number  ? 'selected' : ''}
                                        onClick={() => setPage(number )}
                                    >{number +1}</button>
                                )
                        }
                        <select name="" id="" onChange={e => setPageProduct(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
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