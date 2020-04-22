import React from 'react'
import {withRouter} from 'react-router-dom'

function Header2(props) {
  return (
    <div className='header-container2 flex row'>
      <div
        onClick={() => { props.history.push('/') }}
        className='white home'>Home</div>
      <div className='white'></div>
    </div>
  )
}

export default withRouter(Header2)