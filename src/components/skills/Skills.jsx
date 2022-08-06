import React from 'react'
import SkillBar from './SkillBar';

import CV from '../../assets/CV - Franco Barrera.pdf'

import './Skills.scss'


const Skills = () => {

  const skills = [
    {
      id: 1,
      name: "Unreal Engine 4/5",
      percentage: "80%"
    },
    {
      id: 2,
      name: "HTML",
      percentage: "75%"
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: "70%"
    },
    {
      id: 4,
      name: "CSS",
      percentage: "60%"
    },
    {
      id: 5,
      name: "MySQL",
      percentage: "60%"
    },
    {
      id: 6,
      name: "C++",
      percentage: "35%"
    },
  ]

  return (
    <div id='skills' className='skills'>
      <h1 className='title'>Skills</h1>
      <h3 className='subtitle'>Check out my skills</h3>
      <div className="skills_container">
        {skills.map((skill) => {
          return (<SkillBar
            key={skill.id}
            name={skill.name}
            percentage={skill.percentage}
          />)
        })}
      </div>
      <a className='cv_button' href={CV} download='CV - Franco Barrera.pdf'> Download my Resume </a>      
    </div>
  )
}

export default Skills