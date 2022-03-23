import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <div className="cart-summery">                
                <h5>Order Summery</h5>
                <div className="order-summery">
                    <p>Selected Items: {props.cart.length}</p>
                    <p>Total Price: </p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>
                    <h6>Grand Total: </h6>
                </div>
                <div className="btn-area">
                    <button className='clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                    <button className='review-order-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>                
            </div>
        </div>
    );
};

export default Cart;