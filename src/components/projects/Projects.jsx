import React from 'react'
import ProjectCard from './ProjectCard'

import ShopCardImage from '../../assets/ShopCard.png'
import FlappyDogImage from '../../assets/FlappyDog.png'
import BarracksAndCastlesImage from '../../assets/BarracksAndCastles.png'
import GraVikingoImage from '../../assets/GraVikingo.png'
import CubexImage from '../../assets/Cubex.png'

import './Projects.scss'

const Projects = () => {

  const projects = [
    {
      id:1,
      src: FlappyDogImage,
      name: "Flappy Dog",
      description: "Flappy Bird clone in C++ with SDL2",
      link: "https://github.com/FrancoBarrera99/FlappyDog"
    },
    {
      id:2,
      src: GraVikingoImage,
      name: "GraVikingo",
      description: "2D Platformer developed in Unity 3D for the Women's Game Jam 2023",
      link: "https://morcroc.itch.io/gravikingo"
    },
      
    {
      id:3,
      src: CubexImage,
      name: "Cubex",
      description: "Wave-based survival with isometric view",
      link: "https://github.com/FrancoBarrera99/Cubex"
    },
    {
      id:4,
      src: BarracksAndCastlesImage,
      name: "Barracks & Castles",
      description: "Toony Medieval Multiplayer Strategy Game with Gameplay Ability System",
      link: "https://github.com/FrancoBarrera99/Barracks-Castles"
    },
    {
      id:5,
      src: ShopCardImage,
      name: "Shop Card",
      description: "Web animated 3D product card presentation",
      link: "https://francobarrera99.github.io/shop-product-card/"
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
            description={project.description}
            link={project.link}
            />)
          })}
      </div>
      <h1 className='projects_title'>&lt;Projects/&gt;</h1>
    </div>
  )
}

export default Projects