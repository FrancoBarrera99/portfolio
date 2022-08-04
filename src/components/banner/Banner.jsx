import React from 'react'
import myImage from '../../assets/yo.png'

import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='presentation_container'>
        <div className='top_container'>
          <div className='text_wrapper'>
            <h5 className='text'>Hi, I'm Franco Barrera</h5>
            <h1 className='text'>Software Developer</h1>
          </div>
        </div>
        <div className='bottom_container'>
          <button className='knowme_button'> Get to know me </button>
        </div>
      </div>
      <div className='image_container'>
        <img src={myImage} alt="My Face" className='face_image' />
      </div>
    </div>
  )
}

export default Banner