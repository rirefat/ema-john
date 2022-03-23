import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {id,name, seller, price, ratings,img}=props.product;
    
    return (
        <div className='product-card'>
            <div className="img">
                <img src={img} alt={name} srcset="" />
            </div>
            <div className="details">
                <div className="first-part">
                    <h6>{name}</h6>
                    <p className='subtitle'>Price: ${price}</p>
                </div>
                <div className="second-part">
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>
            <button onClick={()=>props.addToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            
        </div>
        
    );
};

export default Product;