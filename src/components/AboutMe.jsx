import React from 'react'
import Header2 from './Header2'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className='about-me-container full-window'>
      <Header2 />
      <div className='info-container flex row'>
        <div className='picture-div'>
          
        </div>
        <div className='info-div'>
          <h1 className='font-family'>Who am I?</h1>
          <hr id='hr'/>
          <p className='font-family'>Hey, my name is Andres and I am a full stack developer.
          I love creating unique and interesting designs, and the feeling 
          you get when solving a difficult algorithm. Aside from working on
          projects, I like to develop video games. I'm currently working on 
            finishing my very first full game. Head over to my <strong><Link id='strong' to='/projects'>projects</Link></strong> page, 
            and check out some of my work.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe