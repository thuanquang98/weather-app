import React from 'react'
import '../css/navbar.css'
import DropdownMenu from './DropdownMenu'

export default function Navbar(props) {
  return (
    <nav className='navContainer'>
      <div className="contentContainer">

        <input type="text" placeholder='Enter location' />
        <ul>
          {props.locations.map(location => <li className="nav-item" key={location}><a href="">{location}</a></li>)}
        </ul>
        <DropdownMenu units={props.units} />
      </div>
    </nav>
  )
}
