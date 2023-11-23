/** Weather of current location
 *  location name: string
 *  temperature: int
 *  weather summary: string
 *  feels like: int 
 *  time of location
 *  air quality: unsigned int
 *  wind speed: unsigned int
 *  wind direction: unsigned int
 *  visibility: int 
 *  pressure: unsigned int
 *  dew point: int
 */

import React, { Component } from 'react'

export default class Weather extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>{this.props.loc}</span>
        )
    }
}
