import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
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
      </>
    )
  }
}

export default Landing