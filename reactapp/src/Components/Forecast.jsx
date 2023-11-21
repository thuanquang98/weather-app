import React, { Component } from 'react';

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