import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="row ">
                <div className="col-md-10">
                    <div className="row container mt-5 ">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>

                <div className="col-md-2 px-0">Order Summary</div>
            </div>
        </div>
    );
};

export default Shop;