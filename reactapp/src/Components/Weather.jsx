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
        this.state = {
            location: { city: "Winnipeg", country: "CA" },
            temp: -5,
            feels: -7,
            air_quality: 1,
            wind_speed: 13,
            summary: "Why is it so goddam cold!?"
        }
        this.fetch = false;
    }

    fetchWeatherAPI = () => {
        if (!this.fetch) {
            //render default
        }
        else {
            //render with fetching from API
        }
    }

    render() {
        return (
            <div className='weatherContainer'>

                <div id="overviewCurrentTemperature">
                    <div className="locationContainer">

                    </div>
                    <h1>{this.state.temp}</h1>
                    <i className="wi wi-night-sleet" style={{ fontSize: 3 + "em" }}></i>
                    <div className="summaryContainer">
                        <h2 className='summaryCaption'>{this.state.summary}</h2>
                    </div>
                </div>
            </div>
        )
    }
}
