import React from 'react';
import './Header.css'
import logo from '../../img/logo.png'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h2>Multiple Activities Club</h2>
        </div>
    );
};

export default Header;