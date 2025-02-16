import React, { Component } from 'react'
import SkillsCard from '../components/SkillsCard'

import './Skills.css'
export class Skills extends Component {
  render() {
    return (
      <div className='container-skills'>
            <div className='title-skills'>
              <h1>Skills</h1>
            </div>
            <SkillsCard/>
          
      </div>
    )
  }
}

export default Skills
