import React from 'react'

import './ProjectCard.scss'

const ProjectCard = ({ src, name, description, link }) => {

  return (
    <div className='projectcard_container' onClick={() => { window.open(link) }}>
      <div className="img_container">
        <img className='card_img' src={src} alt="project" />
      </div>
      <h4 className='card_title'>{name}</h4>
      <div className='card_description_container'>
        <h4 className='card_description'>{description}</h4>
      </div>
    </div>
  )
}

export default ProjectCard