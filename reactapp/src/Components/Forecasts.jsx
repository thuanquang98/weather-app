import React from 'react'
import Forecast from './Forecast.jsx'

export default function Forecasts(props) {
    return (       
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                {props.forecasts.map((forecast,index) =>
                    <Forecast data={forecast} key={index} />
                    )}
                </tbody>
            </table>       
    )
}
