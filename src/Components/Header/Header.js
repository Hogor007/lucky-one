import React from 'react';
import logo from '../image/honda.png'
import './Header.css'

const Header = () => {
    return (
        <div className='text-center mt-2'>
            <img className='logo' src={logo} alt="" />
        </div>
    );
};

export default Header;