import React from 'react'
import Header from './Header'

function Landing() {

  return (
    <>
      <div className='landing-container'>
        <Header />
        <div className='intro-div flex column'>
          <div className='profile-picture'></div>
          <h1 id='intro'>Welcome!<br /> <br />Andres Arias<br />
              Fullstack Software Developer
            </h1>
        </div>
      </div>
    </>
  )
}


export default Landing