import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import menu from '../../images/menu.png'


const Header = () => {


    return (
        <div>
            <nav className="container">
                <a href="./home"><img src={logo} alt="" /></a>
                <div>
                    <ul id="MenuItems">
                        <li><a href="./shop">Shop</a></li>
                        <li><a href="./order">Order</a></li>
                        <li><a href="./review">Order Review</a></li>
                        <li><a href="./inventory">Manage Inventory</a></li>
                    </ul>
                    <img src={menu} alt="" className='menu-icon' ></img>
                </div>
            </nav>
        </div>
    );
};

export default Header;