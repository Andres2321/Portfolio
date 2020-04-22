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
        </div>
        <h1 className='intro-div'>Welcome,<br /> <br />My name is
        andres <br /> an up and coming <br />
        fullstack <br /> software <br /> developer
        </h1>
      </>
    )
  }
}

export default Landing