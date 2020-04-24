import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab';
import Tooltip from '@material-ui/core/Tooltip';

class Header extends Component {
  state = {
    showAlert: false
  }

  copyAlert = () => {
    this.setState({
      showAlert: true
    })
  }

  render() {
    const { showAlert } = this.state
    return (
      <>
        <div>
          <div className='header-container flex row'>
            <Link
              to='/about-me'>ABOUT</Link>
            <Link
              to='/projects'>PROJECTS</Link>
          </div>
          <div className='icons-container flex row'>

            <Tooltip title='GitHub'>
              <img
                onClick={() => {
                  window.open('https://www.github.com/Andres2321')
                }}
                className='image-size'
                src='https://i.imgur.com/yRJGw7i.png?2'
                alt='GitHub icon'>
              </img>
            </Tooltip>

            <Tooltip title='Click to copy my email'>
              <img
                onClick={() => { navigator.clipboard.writeText('andres-a23@live.com'); this.copyAlert() }}
                className='image-size'
                src='https://i.imgur.com/9h7yFXA.png?1'
                alt='email icon'>
              </img>
            </Tooltip>

            <Tooltip title='LinkedIn'>
              <img
                onClick={() => { window.open('https://www.linkedin.com/in/andres-arias23') }}
                className='image-size'
                src='https://i.imgur.com/NFyGGYf.png?1'
                alt='linked-in icon'>
              </img>
            </Tooltip>

            <Tooltip title='Resume'>
              <img
                onClick={() => { window.open('https://docdro.id/qEKvuIo') }}
                className='image-size'
                src='https://i.imgur.com/Vrzjmsh.png?1'
                alt='resume icon'>
              </img>
            </Tooltip>

          </div>
        </div>
        
        {showAlert ?
          <div className='copy-alert'>
            <Tooltip title='Click to close alert'>
              <Alert
                id='cancel'
                onClick={() => {
                  this.setState({
                    showAlert: false
                  })
                }}
                severity="success">
                <AlertTitle>Success</AlertTitle>
            You have successfully copied my email to your clipboard! Send me an email.
          </Alert>
            </Tooltip>
          </div>
          :
          <>
          </>
        }
      </>
    )
  }
}
export default Header 