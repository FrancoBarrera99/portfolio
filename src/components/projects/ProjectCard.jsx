import React from 'react'

import { FaLink } from 'react-icons/fa'

import './ProjectCard.scss'

const ProjectCard = ({src, name, link}) => {

  let card = document.getElementsByClassName("projectcard_container")

  document.onmousemove = () =>{


  }

  return (
    <div className='projectcard_container' onClick={() => {window.open(link)}}>
        <div className="img_container">
            <img className='card_img' src={src} alt="project" />
        </div>
        <h4 className='card_title'>{name}</h4>
        <div className='card_link_icon'><FaLink/></div>
    </div>
  )
}

export default ProjectCard