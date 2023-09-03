import React from 'react'
import { SiUnrealengine, SiHtml5, SiCss3, SiJavascript, SiSass, SiReact, SiGit, SiCplusplus, SiCsharp } from 'react-icons/si'
import { FaUnity } from 'react-icons/fa'

import './Skills.scss'


const Skills = () => {

  const reveal = () => {

    let reveals = document.querySelectorAll(".skills_container")

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
    <div id='skills' className='skills'>
      <h1 className='skills_title'>&lt;Skills&gt;</h1>
      <div className="skills_container">
        <div className="skill_icon" style={{ color: 'black' }}>
          <SiUnrealengine />
        </div>
        <div className="skill_icon" style={{ color: '#00599C' }}>
          <SiCplusplus />
        </div>
        <div className="skill_icon" style={{ color: '#808080' }}>
          <FaUnity />
        </div>
        <div className="skill_icon" style={{ color: '#9B4F96' }}>
          <SiCsharp />
        </div>
        <div className="skill_icon" style={{ color: '#FFA500' }}>
          <SiHtml5 />
        </div>
        <div className="skill_icon" style={{ color: '#0000FF' }}>
          <SiCss3 />
        </div>
        <div className="skill_icon" style={{ color: '#FFFF00' }}>
          <SiJavascript />
        </div>
        <div className="skill_icon" style={{ color: '#CD6799' }}>
          <SiSass />
        </div>
        <div className="skill_icon" style={{ color: '#61DBFB' }}>
          <SiReact />
        </div>
        <div className="skill_icon" style={{ color: '#F1502F' }}>
          <SiGit />
        </div>
      </div>
      <h1 className='skills_title'>&lt;Skills/&gt;</h1>
    </div>
  )
}

export default Skills