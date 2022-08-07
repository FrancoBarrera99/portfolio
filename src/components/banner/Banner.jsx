import React from 'react'
import myImage from '../../assets/espaldas.png'

import './Banner.scss'

const Banner = () => {
  return (
    <div id='banner' className='banner'>
      <div className='presentation_container'>
        <div className='top_container'>
          <div className='text_wrapper'>
            <h5 className='text'>Hi, I'm Franco Barrera</h5>
            <h1 className='text'>Software Developer</h1>
          </div>
        </div>
        <div className='bottom_container'>
          <h5 className='scroll_text'>Scroll down</h5>
          <div className='scroll_line'></div>
        </div>
      </div>
      <div className='image_container'>
        <img src={myImage} alt="My Face" className='face_image' />
      </div>
    </div>
  )
}

export default Banner