import React from 'react'
import Weather from './Weather'

export default function Weathers() {

    const locations = ["Winnipeg, MB", "Toronto, ON", "Calgary, AB", "Vacouver, BC", "Montreal, QB"]

    return (
        <>
            {locations.map(location => <Weather key={location} loc={location } />)}
        </>       
    )
}
