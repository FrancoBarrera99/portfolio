import React from 'react'
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'


import './Banner.scss'

const Banner = () => {
  return (
    <div id='banner' className='banner'>
      <div className='presentation_container'>
        <div className='top_container'>
          <div className='text_wrapper'>
            <h5 className='text'>Hi, I'm Franco Barrera</h5>
            <h1 className='text'>Game Developer</h1>
          </div>
        </div>
        <div className='bottom_container'>
          <div className='about_social'>
            <a
              href='https://www.linkedin.com/in/franco-barrera-06a94b20a/'
              target="_blank" rel='noreferrer'
              style={{ color: '#0072b1' }}
              className='about_social_icon'>
              <BsLinkedin />
            </a>
            <a
              href='https://github.com/FrancoBarrera99'
              target="_blank" rel='noreferrer'
              style={{ color: '#800080' }}
              className='about_social_icon'>
              <BsGithub />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=5493764392192'
              target="_blank" rel='noreferrer'
              style={{ color: '#25D366' }}
              className='about_social_icon'>
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner