import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
           <nav>
           <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/friends'}>Friends</Link>
            <Link to={'/products'}>Products</Link>
           </nav>
         <p>This is common header</p>
        </div>
    );
};

export default Header;