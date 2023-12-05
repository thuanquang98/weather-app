import React from 'react'
import '../custom/navbar.css'

export default function Navbar(props) {
  return (
    <nav className='navContainer'>
      <div className="contentContainer">
        {props.children}
      </div>
    </nav>
  )
}
