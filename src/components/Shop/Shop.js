import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProducts(data))
    },[])
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    <h3>Products : {products.length}</h3>
                    <div>
                        {
                            products.map(product => <Product
                                product={product}
                                key={product.id}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="order-container">
                    <h4>Order Summary</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;