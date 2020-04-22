import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div>
      <div>
        <div className='header-container'>
          <Link
            className=''
            to='/projects'>ABOUT</Link>
          <Link
            className=''
            to='/projects'>PROJECTS</Link>
          <Link
            className=''
            to='/projects'>CONTACT ME</Link>
        </div>
        <div className='icons-container flex row'>
          <img
            onClick={() => { window.open('https://www.github.com/Andres2321') }}
            className='image-size'
            src='https://i.imgur.com/yRJGw7i.png?2'
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
            className='image-size'
            src='https://i.imgur.com/Vrzjmsh.png?1'
            alt='resume icon'>
          </img>
        </div>

      </div>

    </div>
  )
}

export default Header 