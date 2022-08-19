import React from 'react'
import { MdAlternateEmail, MdMenu } from "react-icons/md";

import './Header.scss'


const Header = () => {


  const showMenu = () => {

    const navButtons = document.getElementById('nav_buttons')
    navButtons.style.visibility = "visible"
    navButtons.style.opacity = 1

  }

  const exitMenu = () => {

    const navButtons = document.getElementById('nav_buttons')
    navButtons.style.opacity = null
    navButtons.style.visibility = null

  }

  window.onload = function () {
    var anchors = document.getElementsByClassName('nav_button');
    for (var i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];
      anchor.onclick = exitMenu
    }
  }

  return (
    <div className='navBar'>
      <div className='brand_logo'>FB</div>
      <div id='nav_buttons' className='nav_buttons'>
        <div className="nav_wrapper">
          <a href='#banner' className="nav_button"> Home </a>
          <a href='#projects' className="nav_button"> Projects </a>
          <a href='#skills' className="nav_button"> Skills </a>
          <a href='#about' className="nav_button"> About </a>
          <a href='#experience' className="nav_button"> Experience </a>
        </div>
        <a href='mailto:francototogomez@gmail.com' className="connect_button"><MdAlternateEmail /></a>
      </div>
      <button onClick={showMenu} className="menu_button"><MdMenu /></button>
    </div>
  );
}

export default Header