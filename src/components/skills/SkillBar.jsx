import React, { useState } from 'react'

import './SkillBar.scss'

const SkillBar = ({name, percentage}) => {

    const [style, setStyle] = useState ()

    setTimeout(()=>{

        const newStyle = {
            opacity: 1,
            width: `${percentage}`,
        }
        setStyle(newStyle)
    }, 1000)

  return (
    <div className='skillbar_container'>
        <h4 className='title'>{name}</h4>
        <div className="progress_bar">
            <div className="progress" style={style}>
                <span className="percentage"> {percentage} </span>
            </div>
        </div>
    </div>
  )
}

export default SkillBar