import React from 'react'
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'

import './About.scss'

const About = () => {
    return (
        <div id='about' className='about'>
            <h1 className='about_title'>&lt;About&gt;</h1>
            <div className='about_container'>
            <div className='about_left'>
                <h2 className='about_title_main'>About me</h2>
                <p className='about_text'>
                    I'm a Software Developer and System Engineering Student passionate for technology,
                    currently developing personal and professional projects both Web and 3D,
                    looking for new challenges with commitment to leave my mark.
                </p>
                <hr className='about_left_divider' />
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
            <div className='about_right'>
                <div className='about_item_wrapper'>
                    <div className='about_item_container'>
                        <h4 className='about_item_title'>Name</h4>
                        <h2 className='about_item_content'>Franco Barrera</h2>
                    </div>
                    <div className='about_item_container'>
                        <h4 className='about_item_title'>Age</h4>
                        <h2 className='about_item_content'>22</h2>
                    </div>
                    <div className='about_item_container'>
                        <h4 className='about_item_title'>Country</h4>
                        <h2 className='about_item_content'>Argentina</h2>
                    </div>
                    <div className='about_item_container'>
                        <h4 className='about_item_title'>Experience</h4>
                        <h2 className='about_item_content'>+1 Year</h2>
                    </div>
                    <div className='about_item_container'>
                        <h4 className='about_item_title'>Languajes</h4>
                        <h2 className='about_item_content'>Spanish and English</h2>
                    </div>
                </div>
            </div>
            </div>
            
            <h1 className='about_title'>&lt;About/&gt;</h1>
        </div>

    )
}

export default About