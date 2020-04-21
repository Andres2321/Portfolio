import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// const Mailto = require('react-mailto');

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main-container flex column page'>

        <div className='landing-container flex column'>

          <div className='flex row'>
            <div>
              <h1 className='text'>Andres</h1>
              <h1 className='text last-name'>Arias</h1>
              <h3 className='white'>full stack software developer</h3>
            </div>
            <div>
              <Link to='/projects' activeClassName='active' className='white'>Projects</Link>
            </div>
          </div>

          <div className='icons-constainer flex row'>

            <img
              onClick={() => { window.open('https://www.github.com/Andres2321') }}
              className='image-size'
              src='https://i.imgur.com/yRJGw7i.png?1'
              alt='GitHub icon'>
            </img>

            <img
              onClick={() => { window.open('') }}
              className='image-size'
              src='https://i.imgur.com/9h7yFXA.png?1'
              alt='email icon'>
            </img>

            <img
              onClick={() => { window.open('https://www.linkedin.com/in/andres-arias-b80235b4') }}
              className='image-size'
              src='https://i.imgur.com/NFyGGYf.png?1'
              alt='linked-in icon'>
            </img>

            <img
              onClick={() => { window.open('https://docdro.id/1ZrC92r') }}
              className='image-size block'
              src='https://i.imgur.com/Vrzjmsh.png?1'
              alt='resume icon'>
            </img>
          </div>

        </div>
      </div>
    )
  }
}


export default Landing