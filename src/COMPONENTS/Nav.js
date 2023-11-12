import React from 'react'
import { Link } from 'react-router-dom'
import '../STYLES/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <h3>KittyChat</h3>
        <Link to={'/search'}><div className='box'>search here</div></Link>
        <Link to={'/'}><button>logOUT</button></Link>
    </div>
  )
}

export default Nav