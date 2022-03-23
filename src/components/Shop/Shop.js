import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-summery">
                <div className="cart-summery-main">
                    <h5>Order Summery</h5>
                    <div className="order-summery">
                        <p>Selected Items:</p>
                        <p>Total Price:</p>
                        <p>Total Shipping Charge:</p>
                        <p>Tax:</p>
                        <h6>Grand Total:</h6>
                    </div>
                    <div className="btn-area">
                        <button className='clear-cart-btn'>Clear Cart</button>
                        <button className='review-order-btn'>Review Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;