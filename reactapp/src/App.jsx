import React, { Component } from 'react';
import Forecasts from './Components/Forecasts';
import Navbar from './Components/Navbar.jsx';
import HistoryBar from './Components/HistoryBar.jsx';
import DropdownMenu from './Components/DropdownMenu.jsx';
import Weather from './Components/Weather.jsx'
import './css/weather-icons.css'

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
        this.state.locations = ["Winnipeg, MB", "Toronto, ON", "Vancounver, BC"]
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <Forecasts forecasts={forecasts} />
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderForecastsTable(this.state.forecasts);

        return (
            <div className="backgroundContainer">
                <Navbar>
                    <input type="text" placeholder='Enter location' />
                    <HistoryBar locations={this.state.locations} />
                    <DropdownMenu />
                </Navbar>
                <div >
                    <h1 id="tabelLabel" >Weather forecast</h1>
                    <Weather />
                </div>
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
