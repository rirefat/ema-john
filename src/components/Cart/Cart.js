import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    let sum = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let flatTax = 0;

    for(const product of cart){
        sum = sum + product.price;
        shipping = shipping + product.shipping;
        tax = sum * 0.1;
        flatTax = tax.toFixed(2)
        console.log(flatTax)
        grandTotal = sum+shipping+parseFloat(flatTax);
        
    }

    return (
        
            <div className="cart-summery">                
                <h5>Order Summery</h5>
                <div className="order-summery">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${sum}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${flatTax}</p>
                    <h6>Grand Total: ${grandTotal}</h6>
                </div>
                <div className="btn-area">
                    <button className='clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                    <button className='review-order-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>                
            </div>
        
    );
};

export default Cart;