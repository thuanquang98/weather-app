import React, { Component } from 'react'
import '../custom/weatherContainer.css'


export default class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: { city: "Winnipeg", country: "CA" },
            temp: -1,
            feels: -2,
            air_quality: -3,
            wind: { speed: 41, direction: 42 },
            summary: "Default description",
            pressure: -5,
            visibility: -6,
            dew_point: -7
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

    static getCurrentTime() {
        const date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

    render() {
        return (
            <div className='weatherContainer'>
                <div className="headerContainer">
                    <div id="weatherLocation">{this.state.location.city + ", " + this.state.location.country}</div>
                    <div className="currTimeContainer">{Weather.getCurrentTime()}</div>
                </div>
                <div className="summaryContainer">
                    <div className="temperatureContainer">
                        <div className="currentTemperatureData" style={{ fontSize: 10 + "rem" }}>{this.state.temp} </div>
                        <span className='temperatureUnit' style={{ fontSize: 1 + "rem" }}>°C</span>
                    </div>
                    <h4 className='summaryCaption'>{this.state.summary}</h4>
                </div>
                <div className="detailContainer">

                </div>
            </div>
        )
    }
}
