import React from 'react'
import ProjectCard from './ProjectCard'

import ShopCardImage from '../../assets/ShopCard.png'
import FlappyDogImage from '../../assets/FlappyDog.png'
import BarracksAndCastles from '../../assets/BarracksAndCastles.png'

import './Projects.scss'

const Projects = () => {

  const projects = [
    {
      id:1,
      src: ShopCardImage,
      name: "Shop Card",
      link: "https://francobarrera99.github.io/shop-product-card/"
    },
    {
      id:2,
      src: FlappyDogImage,
      name: "Flappy Dog",
      link: "https://github.com/FrancoBarrera99/FlappyDog"
    },
    {
      id:3,
      src: BarracksAndCastles,
      name: "Barracks & Castles",
      link: "https://github.com/FrancoBarrera99/Barracks-Castles"
    }
  ]

  return (
    <div id='projects' className='projects'>
      <h1 className='projects_title'>&lt;Projects&gt;</h1>
      <div className='cards_grid'>
        { projects.map((project) => {
            return (<ProjectCard 
            key={project.id}
            src={project.src}
            name={project.name}
            link={project.link}
            />)
          })}
      </div>
      <h1 className='projects_title'>&lt;Projects/&gt;</h1>
    </div>
  )
}

export default Projects