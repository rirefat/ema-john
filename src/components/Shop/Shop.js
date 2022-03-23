import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h1>This is the shop container</h1>
            </div>
            <div className="cart-summery">
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
    );
};

export default Shop;