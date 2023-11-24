import React, { Component } from 'react'
import '../css/dropdown-menu.css'
/**
 * isOpen: is the dropdownmenu opened? if yes, dropdownmenu visible
 * receive props.
 */

export default class DropdownMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='dropdown-container'>
                <input type="button" id="units" value="Units"></input>
                <div className="dropdown-menu">
                    <div className="dropdown-item">Celsius (°C)</div>
                    <div className="dropdown-item">Fahrenheit (°F)</div>
                </div>
            </div>
        )
    }
}
