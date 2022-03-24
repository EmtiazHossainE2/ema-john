import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="row shop-container">
                <div className="col-lg-10 col-md-9">
                    <div className="row container mt-5 ">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 cart-container">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;