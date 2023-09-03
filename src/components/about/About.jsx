import React from 'react'
import MyFace from '../../assets/Tom-Shelby.png'
import CV from '../../assets/CV - Franco Barrera.pdf'

import './About.scss'

const About = () => {

    const calculateElapsedTime = (newDate) => {
        const newDateObj = new Date(newDate);
        const currentDate = new Date();

        let elapsedTime = currentDate.getFullYear() - newDateObj.getFullYear();

        const newDateMonth = newDateObj.getMonth();
        const newDateDay = newDateObj.getDate();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();

        if (currentMonth < newDateMonth || (currentMonth === newDateMonth && currentDay < newDateDay)) {
            elapsedTime--;
        }

        return elapsedTime;
    };

    const birthdayDate = '1999-09-24';
    const experienceDate = '2020-12-16';

    const age = calculateElapsedTime(birthdayDate);
    const experience = calculateElapsedTime(experienceDate)

    const reveal = () => {

        let reveals = document.querySelectorAll(".about_img")

        for (let i = 0; i < reveals.length; i++) {

            let windowHeight = window.innerHeight
            let elementTop = reveals[i].getBoundingClientRect().top
            let elementVisible = 100

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active")
            } else {
                reveals[i].classList.remove("active")
            }
        }

    }

    window.addEventListener("scroll", reveal)

    return (
        <div id='about' className='about'>
            <h1 className='about_title'>&lt;About&gt;</h1>
            <div className='about_container'>
                <img className='about_img' src={MyFace} alt="shelby" />
                <div className='about_left'>
                    <h2 className='about_title_main'>About me</h2>
                    <p className='about_text'>
                        Passionate Game Developer pursuing a Systems Engineering degree. Strong foundation in system design and software
                        development principles. Thrives in collaborative environments and contributes to innovative projects. Keen interest in
                        graphics, game development, and cutting-edge technologies. Always looking for opportunities to enhance knowledge
                        and stay up-to-date with industry trends.
                    </p>
                    <hr className='about_left_divider' />
                    <a className='cv_button' href={CV} download='CV - Franco Barrera.pdf'> Download Resume </a>
                </div>
                <div className='about_right'>
                    <div className='about_item_wrapper'>
                        <div className='about_item_container'>
                            <h4 className='about_item_title'>Name</h4>
                            <h2 className='about_item_content'>Franco Barrera</h2>
                        </div>
                        <div className='about_item_container'>
                            <h4 className='about_item_title'>Age</h4>
                            <h2 className='about_item_content'>{age}</h2>
                        </div>
                        <div className='about_item_container'>
                            <h4 className='about_item_title'>Country</h4>
                            <h2 className='about_item_content'>Argentina</h2>
                        </div>
                        <div className='about_item_container'>
                            <h4 className='about_item_title'>Experience</h4>
                            <h2 className='about_item_content'>+{experience} Years</h2>
                        </div>
                        <div className='about_item_container'>
                            <h4 className='about_item_title'>Languages</h4>
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