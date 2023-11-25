import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default class DropdownMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false, units: ["°C", "°F"] };
    }


    setTempUnit = (unit) => {
        return
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle id=''>
                    Units
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Celsius (°C)</Dropdown.Item>
                    <Dropdown.Item href="#">Fahrenheit (°F)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}
