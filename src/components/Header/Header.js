import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className="nav-menu">
                <div className="nav-icon">
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className="main-menu">
                    <a href="#">Order</a>
                    <a href="#">Order Review</a>
                    <a href="#">Manage Inventory</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;