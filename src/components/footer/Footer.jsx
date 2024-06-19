import React from 'react'

import { MdArrowUpward } from 'react-icons/md'

import './Footer.scss'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footer_top'>
        <h1 className='footer_top_message'>
          Nothing else to see here...
        </h1>
        <a href='#banner' className='footer_top_button'><MdArrowUpward/></a>
      </div>
      <div className='footer_bottom'>
        Argentina, Misiones - 2022
      </div>
    </div>
  )
}

export default Footer