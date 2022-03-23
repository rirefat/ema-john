import React from 'react';
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
            <button>Add to Cart</button>
        </div>
        
    );
};

export default Product;