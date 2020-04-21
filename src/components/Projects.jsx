import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {

  return (
    <div className='full-window page'>
      <h2 className='center-text white'>Projects</h2>
      <Link activeClassName='active' to='/' className='white'>Home</Link>
      <div className='flex row project-container'>
        <div className='project-card border'></div>
        <div className='project-card border'></div>
        <div className='project-card border'></div>
        <div className='project-card border'></div>
      </div>
    </div>
  )
}


export default Projects