import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className="nav-menu">
                <div className="nav-icon">
                    <img src={logo} alt=""/>
                </div>
                <div className="main-menu">
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;