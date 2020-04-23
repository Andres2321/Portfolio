import React, { Component } from 'react'
import Header from './Header'
// const Mailto = require('react-mailto');

class Landing extends Component {
  constructor(props) {
    super(props)

  }

  render() {
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
}

export default Landing