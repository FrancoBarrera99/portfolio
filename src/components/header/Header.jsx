import React from 'react'
import { MdAlternateEmail } from "react-icons/md";

import './Header.scss'


const Header = () => {
  return (
    <div className='navBar'>
            <div className='brand_logo'>F B</div>
            <div className='nav_buttons'>
                <a href='#banner' className="nav_button"> Home </a>
                <a href='#projects' className="nav_button"> Projects </a>
                <a href='#skills' className="nav_button"> Skills </a>
                <a href='#about' className="nav_button"> About </a>
                <a href='#experience' className="nav_button"> Experience </a>
            </div>
            <a href='mailto:francototogomez@gmail.com' className="connect_button"><MdAlternateEmail/></a>
        </div>
  );
}

export default Header