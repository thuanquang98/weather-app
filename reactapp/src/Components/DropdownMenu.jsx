import React, { Component } from 'react'
import '../custom/DropdownMenu.css'

export default class DropdownMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false, units: ["Celsius", "Fahrenheit", "Kelvin"], selectedIndex: -1 };
    }


    getDropdownClass = () => {
        let dropdown = "dropdown-menu"

        return !this.state.isOpen ? dropdown : dropdown + " active"
    }

    setDropDownState = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    getDropDownItemClass = (index) => {
        return this.state.selectedIndex === index ? 'dropdown-item active' : 'dropdown-item'
    }

    setDropDownItem = (index) => {
        this.setState({ selectedIndex: index })
    }

    render() {
        return (
            <div className="dropdown">
                <button className='btn btn-info dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle="dropdown" onClick={this.setDropDownState}>
                    Units
                </button>
                <div className={this.getDropdownClass()} aria-labelledby='dropdownMenuButton'>
                    {this.state.units.map((unit, index) => (<a href="#"
                        className={this.getDropDownItemClass(index)}
                        key={unit}
                        onClick={() => this.setDropDownItem(index)}
                    >
                        {unit}
                    </a>)

                    )}
                </div>
            </div>
        )
    }

}
