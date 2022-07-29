import React from 'react'
import myImage from '../../assets/yo.png'

import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='text_container'>
        <div className='text_wrapper'>
          <h1 className='text'>Franco Barrera</h1>
          <h5 className='text'>Front-end Web Developer</h5>
        </div>
      </div>
      <div className='image_container'>
        <img src={myImage} alt="My Face" className='face_image' />
      </div>
    </div>
  )
}

export default Banner