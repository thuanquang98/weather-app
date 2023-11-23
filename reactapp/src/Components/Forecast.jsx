import React, { Component } from 'react';

//in the future, sets of data display for forecast
/*
    forecast {
        tempHigh: int
        tempLow: int
        forecastDate: DATE format(weekday, day of month, month)
        weatherSummary: string
        weatherIcons: icon
    }
*/


class Forecast extends Component {

    render() {
        return (
            <>
                <tr >
                    <td>{this.props.data.date}</td>
                    <td>{this.props.data.temperatureC}</td>
                    <td>{this.props.data.temperatureF}</td>
                    <td>{this.props.data.summary}</td>
                </tr>
            </>
        );
    }
}

export default Forecast;