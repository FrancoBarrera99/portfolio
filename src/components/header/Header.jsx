import React from 'react'
import { MdAlternateEmail } from "react-icons/md";

import './Header.scss'


const Header = () => {
  return (
    <div className='navBar'>
            <div className='brand_logo'>F B</div>
            <div className='nav_buttons'>
                <div className="nav_button"> Home </div>
                <div className="nav_button"> Skills </div>
                <div className="nav_button"> Projects </div>
                <div className="nav_button"> Jobs </div>
            </div>
            <div className="connect_button"><MdAlternateEmail/></div>
        </div>
  );
}

export default Header