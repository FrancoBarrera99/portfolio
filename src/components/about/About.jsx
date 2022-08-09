import React from 'react'
import MyFace from '../../assets/Tom-Shelby.png'

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
                <img className='about_img' src={MyFace} alt="shelby" />
            </div>
            <h1 className='about_title'>&lt;About/&gt;</h1>
        </div>

    )
}

export default About