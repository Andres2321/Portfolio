import React from 'react'
import Header from './Header'

function Landing() {

  return (
    <>
      <div className='landing-container'>
        <Header />
        <div className='intro-div flex column'>
          <div className='profile-picture'></div>
          <h1 >Welcome,<br /> <br />My name is
              Andres <br /> an up and coming <br />
              fullstack software <br /> developer
            </h1>
        </div>
      </div>
    </>
  )
}


export default Landing