import React, { Component } from 'react'

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
            <div id='units'>
                <button>Units</button>
            </div>
        )
    }
}
